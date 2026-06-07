import { useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
  Badge,
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
  Separator,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";
import {
  Plus,
  Pencil,
  Trash2,
  Search,
  ArrowUpDown,
  MoreHorizontal,
  ExternalLink,
} from "lucide-react";
import { useInterviews } from "@/hooks";
import { cn } from "@/lib/utils";
import { formatPortfolioDate } from "@/lib";
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  type RowSelectionState,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table";
import type {
  Interview,
  InterviewStatus,
  InterviewRound,
  InterviewSource,
  InterviewLocation,
  SalaryCurrency,
} from "@/types";

const STATUS_OPTIONS: { value: InterviewStatus; label: string }[] = [
  { value: "applied", label: "Applied" },
  { value: "scheduled", label: "Scheduled" },
  { value: "taken", label: "Taken" },
  { value: "passed", label: "Passed" },
  { value: "failed", label: "Failed" },
  { value: "offer", label: "Offer" },
  { value: "rejected", label: "Rejected" },
  { value: "ghosted", label: "Ghosted" },
  { value: "cancelled", label: "Cancelled" },
];

const ROUND_OPTIONS: { value: InterviewRound; label: string }[] = [
  { value: "applied", label: "Applied" },
  { value: "phone-screen", label: "Phone Screen" },
  { value: "technical", label: "Technical" },
  { value: "system-design", label: "System Design" },
  { value: "behavioral", label: "Behavioral" },
  { value: "hr", label: "HR" },
  { value: "final", label: "Final Round" },
  { value: "assignment", label: "Assignment" },
  { value: "other", label: "Other" },
];

const SOURCE_OPTIONS: { value: InterviewSource; label: string }[] = [
  { value: "linkedin", label: "LinkedIn" },
  { value: "indeed", label: "Indeed" },
  { value: "company-website", label: "Company Website" },
  { value: "japandev", label: "JapanDev" },
  { value: "tokyodev", label: "TokyoDev" },
  { value: "glassdoor", label: "GlassDoor" },
  { value: "daijob", label: "Daijob" },
  { value: "other", label: "Other" },
];

const LOCATION_OPTIONS: { value: InterviewLocation; label: string }[] = [
  { value: "remote", label: "Remote" },
  { value: "onsite", label: "On-site" },
  { value: "hybrid", label: "Hybrid" },
];

const SALARY_CURRENCY_OPTIONS: { value: SalaryCurrency; label: string }[] = [
  { value: "inr", label: "₹ INR" },
  { value: "jpy", label: "¥ JPY" },
  { value: "usd", label: "$ USD" },
];

const statusColors: Record<InterviewStatus, string> = {
  applied:
    "bg-purple-500/15 text-purple-700 dark:text-purple-400 border-purple-500/30",
  scheduled:
    "bg-blue-500/15 text-blue-700 dark:text-blue-400 border-blue-500/30",
  taken:
    "bg-yellow-500/15 text-yellow-700 dark:text-yellow-400 border-yellow-500/30",
  passed:
    "bg-green-500/15 text-green-700 dark:text-green-400 border-green-500/30",
  failed: "bg-red-500/15 text-red-700 dark:text-red-400 border-red-500/30",
  offer:
    "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30",
  rejected:
    "bg-orange-500/15 text-orange-700 dark:text-orange-400 border-orange-500/30",
  ghosted: "bg-gray-500/15 text-gray-700 dark:text-gray-400 border-gray-500/30",
  cancelled:
    "bg-slate-500/15 text-slate-700 dark:text-slate-400 border-slate-500/30",
};

type FormData = Omit<Interview, "id" | "createdAt" | "updatedAt">;

const emptyForm: FormData = {
  companyName: "",
  position: "",
  status: "applied",
  round: "applied",
  source: "linkedin",
  appliedVia: "",
  appliedDate: "",
  interviewDate: "",
  location: "remote",
  salaryCurrency: "inr",
  salary: "",
  jobUrl: "",
  contactPerson: "",
  contactEmail: "",
  notes: "",
};

export function InterviewsTab() {
  const { interviews, addInterview, updateInterview, deleteInterview } =
    useInterviews();

  const getDateTimestamp = (dateString: string) => {
    const timestamp = new Date(dateString).getTime();
    return Number.isNaN(timestamp) ? 0 : timestamp;
  };

  const isWaitingPeriodOver = (interview: Interview) => {
    if (interview.status !== "applied" || !interview.appliedDate) return false;
    const fourteenDaysMs = 14 * 24 * 60 * 60 * 1000;
    return Date.now() - getDateTimestamp(interview.appliedDate) >= fourteenDaysMs;
  };

  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [form, setForm] = useState<FormData>(emptyForm);
  const [filterStatus, setFilterStatus] = useState<InterviewStatus | "all">(
    "all",
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [sorting, setSorting] = useState<SortingState>([
    { id: "appliedDate", desc: true },
  ]);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const filteredInterviews = interviews
    .filter((i) => filterStatus === "all" || i.status === filterStatus)
    .filter(
      (i) =>
        searchQuery === "" ||
        i.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        i.position.toLowerCase().includes(searchQuery.toLowerCase()),
    );

  const handleOpenAdd = () => {
    setForm(emptyForm);
    setEditingId(null);
    setDialogOpen(true);
  };

  const handleOpenEdit = (interview: Interview) => {
    setForm({
      companyName: interview.companyName,
      position: interview.position,
      status: interview.status,
      round: interview.round,
      source: interview.source,
      appliedVia: interview.appliedVia,
      appliedDate: interview.appliedDate,
      interviewDate: interview.interviewDate,
      location: interview.location,
      salaryCurrency: interview.salaryCurrency,
      salary: interview.salary,
      jobUrl: interview.jobUrl,
      contactPerson: interview.contactPerson,
      contactEmail: interview.contactEmail,
      notes: interview.notes,
    });
    setEditingId(interview.id);
    setDialogOpen(true);
  };

  const handleSave = () => {
    if (!form.companyName.trim() || !form.position.trim()) return;
    if (editingId) {
      updateInterview(editingId, form);
    } else {
      addInterview(form);
    }
    setDialogOpen(false);
    setEditingId(null);
    setForm(emptyForm);
  };

  const handleConfirmDelete = () => {
    if (deletingId) {
      deleteInterview(deletingId);
      setDeletingId(null);
      setDeleteDialogOpen(false);
    }
  };

  const handleOpenDelete = (id: string) => {
    setDeletingId(id);
    setDeleteDialogOpen(true);
  };

  const updateField = <K extends keyof FormData>(
    key: K,
    value: FormData[K],
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const getStatusLabel = (status: InterviewStatus) => {
    return STATUS_OPTIONS.find((option) => option.value === status)?.label ?? status;
  };

  const getSourceLabel = (source: InterviewSource) => {
    return SOURCE_OPTIONS.find((option) => option.value === source)?.label ?? source;
  };

  const getLocationLabel = (location: InterviewLocation) => {
    return LOCATION_OPTIONS.find((option) => option.value === location)?.label ?? location;
  };

  const SortableHeader = ({
    column,
    title,
  }: {
    column: { toggleSorting: (desc?: boolean) => void; getIsSorted: () => false | "asc" | "desc" };
    title: string;
  }) => (
    <Button
      variant="ghost"
      className="-ml-3 h-8"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {title}
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  );

  const SelectCheckbox = ({
    checked,
    indeterminate,
    onChange,
    ariaLabel,
  }: {
    checked: boolean;
    indeterminate?: boolean;
    onChange: (checked: boolean) => void;
    ariaLabel: string;
  }) => {
    const checkboxRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (checkboxRef.current) {
        checkboxRef.current.indeterminate = Boolean(indeterminate) && !checked;
      }
    }, [checked, indeterminate]);

    return (
      <input
        ref={checkboxRef}
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        aria-label={ariaLabel}
        className="h-4 w-4 rounded border-input accent-primary"
      />
    );
  };

  const formatSalaryValue = (interview: Interview) => {
    if (!interview.salary) return "-";
    const symbol =
      interview.salaryCurrency === "jpy"
        ? "\u00A5"
        : interview.salaryCurrency === "usd"
          ? "$"
          : "\u20B9";
    return `${symbol} ${interview.salary}`;
  };

  const columns: ColumnDef<Interview>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <SelectCheckbox
          checked={table.getIsAllPageRowsSelected()}
          indeterminate={table.getIsSomePageRowsSelected()}
          onChange={(checked) => table.toggleAllPageRowsSelected(checked)}
          ariaLabel="Select all rows"
        />
      ),
      cell: ({ row }) => (
        <SelectCheckbox
          checked={row.getIsSelected()}
          onChange={(checked) => row.toggleSelected(checked)}
          ariaLabel={`Select interview row ${row.original.companyName}`}
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "companyName",
      header: ({ column }) => <SortableHeader column={column} title="Company" />,
      cell: ({ row }) => (
        <div className="min-w-[180px]">
          <p className="font-medium leading-tight">{row.original.companyName}</p>
          <p className="text-xs text-muted-foreground truncate">{row.original.position}</p>
        </div>
      ),
    },
    {
      accessorKey: "status",
      header: ({ column }) => <SortableHeader column={column} title="Status" />,
      sortingFn: (rowA, rowB) => {
        const first = getStatusLabel(rowA.original.status);
        const second = getStatusLabel(rowB.original.status);
        return first.localeCompare(second);
      },
      cell: ({ row }) => {
        const interview = row.original;
        return (
          <div className="flex flex-wrap items-center gap-1.5 min-w-[180px]">
            <Badge
              className={cn(
                "text-[10px] sm:text-xs",
                statusColors[interview.status],
              )}
            >
              {getStatusLabel(interview.status)}
            </Badge>
            {isWaitingPeriodOver(interview) && (
              <Badge
                variant="outline"
                className="text-[10px] sm:text-xs border-amber-500/40 text-amber-700 dark:text-amber-400"
              >
                Waiting Period Over
              </Badge>
            )}
          </div>
        );
      },
    },
    {
      accessorKey: "appliedDate",
      header: ({ column }) => <SortableHeader column={column} title="Applied Date" />,
      sortingFn: (rowA, rowB) => {
        const first = rowA.original.appliedDate || rowA.original.createdAt;
        const second = rowB.original.appliedDate || rowB.original.createdAt;
        return getDateTimestamp(first) - getDateTimestamp(second);
      },
      cell: ({ row }) =>
        row.original.appliedDate
          ? formatPortfolioDate(row.original.appliedDate)
          : "-",
    },
    {
      accessorKey: "interviewDate",
      header: ({ column }) => <SortableHeader column={column} title="Interview Date" />,
      sortingFn: (rowA, rowB) => {
        const first = rowA.original.interviewDate || "";
        const second = rowB.original.interviewDate || "";
        return getDateTimestamp(first) - getDateTimestamp(second);
      },
      cell: ({ row }) =>
        row.original.interviewDate
          ? formatPortfolioDate(row.original.interviewDate)
          : "-",
    },
    {
      accessorKey: "source",
      header: ({ column }) => <SortableHeader column={column} title="Source" />,
      sortingFn: (rowA, rowB) => {
        const first = getSourceLabel(rowA.original.source);
        const second = getSourceLabel(rowB.original.source);
        return first.localeCompare(second);
      },
      cell: ({ row }) => {
        return getSourceLabel(row.original.source);
      },
    },
    {
      accessorKey: "location",
      header: ({ column }) => <SortableHeader column={column} title="Location" />,
      sortingFn: (rowA, rowB) => {
        const first = getLocationLabel(rowA.original.location);
        const second = getLocationLabel(rowB.original.location);
        return first.localeCompare(second);
      },
      cell: ({ row }) => {
        return getLocationLabel(row.original.location);
      },
    },
    {
      id: "salary",
      header: ({ column }) => <SortableHeader column={column} title="Salary" />,
      accessorFn: (row) => {
        if (!row.salary) return 0;
        const onlyNumbers = row.salary.replace(/[^\d.]/g, "");
        return Number(onlyNumbers) || 0;
      },
      cell: ({ row }) => formatSalaryValue(row.original),
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const interview = row.original;
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open row actions</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {interview.jobUrl && (
                <DropdownMenuItem
                  onClick={() =>
                    window.open(interview.jobUrl, "_blank", "noopener,noreferrer")
                  }
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Open Job Post
                </DropdownMenuItem>
              )}
              <DropdownMenuItem onClick={() => handleOpenEdit(interview)}>
                <Pencil className="mr-2 h-4 w-4" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-destructive focus:text-destructive"
                onClick={() => handleOpenDelete(interview.id)}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const table = useReactTable({
    data: filteredInterviews,
    columns,
    state: { sorting, rowSelection },
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    enableRowSelection: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  // Stats
  const stats = {
    total: interviews.length,
    scheduled: interviews.filter((i) => i.status === "scheduled").length,
    passed: interviews.filter((i) => i.status === "passed").length,
    offers: interviews.filter((i) => i.status === "offer").length,
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Interviews</h2>
        <Button onClick={handleOpenAdd} size="sm">
          <Plus className="w-4 h-4 mr-1" />
          Add Interview
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Card>
          <CardContent className="p-3 sm:p-4 text-center">
            <p className="text-2xl sm:text-3xl font-bold">{stats.total}</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Total</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-3 sm:p-4 text-center">
            <p className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">
              {stats.scheduled}
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Scheduled
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-3 sm:p-4 text-center">
            <p className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400">
              {stats.passed}
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">Passed</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-3 sm:p-4 text-center">
            <p className="text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400">
              {stats.offers}
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">Offers</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search company or position..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <Select
          value={filterStatus}
          onValueChange={(v) => setFilterStatus(v as InterviewStatus | "all")}
        >
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            {STATUS_OPTIONS.map((s) => (
              <SelectItem key={s.value} value={s.value}>
                {s.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => table.toggleAllPageRowsSelected(true)}
        >
          Select All
        </Button>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => table.toggleAllPageRowsSelected(false)}
        >
          Clear Selection
        </Button>
        <p className="text-xs sm:text-sm text-muted-foreground">
          {table.getSelectedRowModel().rows.length} selected
        </p>
      </div>

      <div className="rounded-md border overflow-x-auto">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-muted-foreground"
                >
                  {interviews.length === 0
                    ? "No interviews yet. Click 'Add Interview' to get started."
                    : "No interviews match your filters."}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <p className="text-xs sm:text-sm text-muted-foreground">
        {table.getRowModel().rows.length} result
        {table.getRowModel().rows.length === 1 ? "" : "s"}
      </p>

      {/* Add / Edit Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingId ? "Edit Interview" : "Add Interview"}
            </DialogTitle>
            <DialogDescription>
              {editingId
                ? "Update the interview details below."
                : "Fill in the details for a new interview entry."}
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            {/* Row: Company & Position */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name *</Label>
                <Input
                  id="companyName"
                  placeholder="e.g. Google"
                  value={form.companyName}
                  onChange={(e) => updateField("companyName", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="position">Position *</Label>
                <Input
                  id="position"
                  placeholder="e.g. Software Engineer"
                  value={form.position}
                  onChange={(e) => updateField("position", e.target.value)}
                />
              </div>
            </div>

            {/* Row: Status & Round */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Status</Label>
                <Select
                  value={form.status}
                  onValueChange={(v) =>
                    updateField("status", v as InterviewStatus)
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {STATUS_OPTIONS.map((s) => (
                      <SelectItem key={s.value} value={s.value}>
                        {s.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Round</Label>
                <Select
                  value={form.round}
                  onValueChange={(v) =>
                    updateField("round", v as InterviewRound)
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {ROUND_OPTIONS.map((r) => (
                      <SelectItem key={r.value} value={r.value}>
                        {r.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Row: Source & Applied Via */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Found Via</Label>
                <Select
                  value={form.source}
                  onValueChange={(v) =>
                    updateField("source", v as InterviewSource)
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {SOURCE_OPTIONS.map((s) => (
                      <SelectItem key={s.value} value={s.value}>
                        {s.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="appliedVia">Applied Via</Label>
                <Input
                  id="appliedVia"
                  placeholder="e.g. LinkedIn Easy Apply"
                  value={form.appliedVia}
                  onChange={(e) => updateField("appliedVia", e.target.value)}
                />
              </div>
            </div>

            {/* Row: Location & Salary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Location</Label>
                <Select
                  value={form.location}
                  onValueChange={(v) =>
                    updateField("location", v as InterviewLocation)
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {LOCATION_OPTIONS.map((l) => (
                      <SelectItem key={l.value} value={l.value}>
                        {l.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="salary">Salary / CTC</Label>
                <div className="flex gap-2">
                  <Select
                    value={form.salaryCurrency}
                    onValueChange={(v) =>
                      updateField("salaryCurrency", v as SalaryCurrency)
                    }
                  >
                    <SelectTrigger className="w-[90px] shrink-0">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {SALARY_CURRENCY_OPTIONS.map((c) => (
                        <SelectItem key={c.value} value={c.value}>
                          {c.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    id="salary"
                    placeholder={
                      form.salaryCurrency === "jpy"
                        ? "e.g. 5,000,000"
                        : form.salaryCurrency === "usd"
                          ? "e.g. 80,000"
                          : "e.g. 12 LPA"
                    }
                    value={form.salary}
                    onChange={(e) => updateField("salary", e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Row: Dates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="appliedDate">Applied Date</Label>
                <Input
                  id="appliedDate"
                  type="date"
                  value={form.appliedDate}
                  onChange={(e) => updateField("appliedDate", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="interviewDate">Interview Date</Label>
                <Input
                  id="interviewDate"
                  type="date"
                  value={form.interviewDate}
                  onChange={(e) => updateField("interviewDate", e.target.value)}
                />
              </div>
            </div>

            <Separator />

            {/* Row: Contact info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="contactPerson">Contact Person</Label>
                <Input
                  id="contactPerson"
                  placeholder="e.g. John Doe"
                  value={form.contactPerson}
                  onChange={(e) => updateField("contactPerson", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactEmail">Contact Email</Label>
                <Input
                  id="contactEmail"
                  type="email"
                  placeholder="e.g. john@company.com"
                  value={form.contactEmail}
                  onChange={(e) => updateField("contactEmail", e.target.value)}
                />
              </div>
            </div>

            {/* Job URL */}
            <div className="space-y-2">
              <Label htmlFor="jobUrl">Job Posting URL</Label>
              <Input
                id="jobUrl"
                type="url"
                placeholder="https://..."
                value={form.jobUrl}
                onChange={(e) => updateField("jobUrl", e.target.value)}
              />
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                placeholder="Any additional notes about this interview..."
                value={form.notes}
                onChange={(e) => updateField("notes", e.target.value)}
                rows={3}
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              disabled={!form.companyName.trim() || !form.position.trim()}
            >
              {editingId ? "Update" : "Add"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Delete Interview</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this interview? This action cannot
              be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleConfirmDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
