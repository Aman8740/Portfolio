import { useState } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
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
} from "@/components/ui"
import {
  Plus,
  Pencil,
  Trash2,
  Building2,
  Calendar,
  MapPin,
  ExternalLink,
  User,
  Mail,
  Search,
  Briefcase,
  IndianRupee,
  JapaneseYen,
} from "lucide-react"
import { useInterviews } from "@/hooks"
import { cn } from "@/lib/utils"
import type {
  Interview,
  InterviewStatus,
  InterviewRound,
  InterviewSource,
  InterviewLocation,
  SalaryCurrency,
} from "@/types"

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
]

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
]

const SOURCE_OPTIONS: { value: InterviewSource; label: string }[] = [
  { value: "linkedin", label: "LinkedIn" },
  { value: "naukri", label: "Naukri" },
  { value: "indeed", label: "Indeed" },
  { value: "company-website", label: "Company Website" },
  { value: "referral", label: "Referral" },
  { value: "recruiter", label: "Recruiter" },
  { value: "angel-list", label: "AngelList" },
  { value: "japandev", label: "JapanDev" },
  { value: "other", label: "Other" },
]

const LOCATION_OPTIONS: { value: InterviewLocation; label: string }[] = [
  { value: "remote", label: "Remote" },
  { value: "onsite", label: "On-site" },
  { value: "hybrid", label: "Hybrid" },
]

const statusColors: Record<InterviewStatus, string> = {
  applied: "bg-purple-500/15 text-purple-700 dark:text-purple-400 border-purple-500/30",
  scheduled: "bg-blue-500/15 text-blue-700 dark:text-blue-400 border-blue-500/30",
  taken: "bg-yellow-500/15 text-yellow-700 dark:text-yellow-400 border-yellow-500/30",
  passed: "bg-green-500/15 text-green-700 dark:text-green-400 border-green-500/30",
  failed: "bg-red-500/15 text-red-700 dark:text-red-400 border-red-500/30",
  offer: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30",
  rejected: "bg-orange-500/15 text-orange-700 dark:text-orange-400 border-orange-500/30",
  ghosted: "bg-gray-500/15 text-gray-700 dark:text-gray-400 border-gray-500/30",
  cancelled: "bg-slate-500/15 text-slate-700 dark:text-slate-400 border-slate-500/30",
}

type FormData = Omit<Interview, "id" | "createdAt" | "updatedAt">

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
}

export function InterviewsTab() {
  const { interviews, addInterview, updateInterview, deleteInterview } = useInterviews()

  const [dialogOpen, setDialogOpen] = useState(false)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const [form, setForm] = useState<FormData>(emptyForm)
  const [filterStatus, setFilterStatus] = useState<InterviewStatus | "all">("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredInterviews = interviews
    .filter((i) => filterStatus === "all" || i.status === filterStatus)
    .filter(
      (i) =>
        searchQuery === "" ||
        i.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        i.position.toLowerCase().includes(searchQuery.toLowerCase())
    )

  const handleOpenAdd = () => {
    setForm(emptyForm)
    setEditingId(null)
    setDialogOpen(true)
  }

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
    })
    setEditingId(interview.id)
    setDialogOpen(true)
  }

  const handleSave = () => {
    if (!form.companyName.trim() || !form.position.trim()) return
    if (editingId) {
      updateInterview(editingId, form)
    } else {
      addInterview(form)
    }
    setDialogOpen(false)
    setEditingId(null)
    setForm(emptyForm)
  }

  const handleConfirmDelete = () => {
    if (deletingId) {
      deleteInterview(deletingId)
      setDeletingId(null)
      setDeleteDialogOpen(false)
    }
  }

  const handleOpenDelete = (id: string) => {
    setDeletingId(id)
    setDeleteDialogOpen(true)
  }

  const updateField = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  // Stats
  const stats = {
    total: interviews.length,
    scheduled: interviews.filter((i) => i.status === "scheduled").length,
    passed: interviews.filter((i) => i.status === "passed").length,
    offers: interviews.filter((i) => i.status === "offer").length,
  }

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
            <p className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">{stats.scheduled}</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Scheduled</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-3 sm:p-4 text-center">
            <p className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400">{stats.passed}</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Passed</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-3 sm:p-4 text-center">
            <p className="text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400">{stats.offers}</p>
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

      {/* Interview Cards */}
      {filteredInterviews.length === 0 ? (
        <Card>
          <CardContent className="p-8 sm:p-12 text-center">
            <Briefcase className="w-12 h-12 mx-auto text-muted-foreground/50 mb-4" />
            <p className="text-muted-foreground text-sm sm:text-base">
              {interviews.length === 0
                ? "No interviews yet. Click 'Add Interview' to get started."
                : "No interviews match your filters."}
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {filteredInterviews.map((interview) => (
            <Card key={interview.id} className="group">
              <CardHeader className="p-3 sm:p-4 pb-2 sm:pb-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <CardTitle className="text-base sm:text-lg truncate">
                        {interview.companyName}
                      </CardTitle>
                      <Badge className={cn("text-[10px] sm:text-xs", statusColors[interview.status])}>
                        {STATUS_OPTIONS.find((s) => s.value === interview.status)?.label}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">
                      {interview.position}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handleOpenEdit(interview)}
                    >
                      <Pencil className="h-3.5 w-3.5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-destructive hover:text-destructive"
                      onClick={() => handleOpenDelete(interview.id)}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-3 sm:p-4 pt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs sm:text-sm text-muted-foreground">
                  {interview.round && (
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="h-3.5 w-3.5 shrink-0" />
                      <span className="truncate">
                        {ROUND_OPTIONS.find((r) => r.value === interview.round)?.label}
                      </span>
                    </div>
                  )}
                  {interview.source && (
                    <div className="flex items-center gap-1.5">
                      <Building2 className="h-3.5 w-3.5 shrink-0" />
                      <span className="truncate">
                        Found via {SOURCE_OPTIONS.find((s) => s.value === interview.source)?.label}
                      </span>
                    </div>
                  )}
                  {interview.location && (
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 shrink-0" />
                      <span className="truncate">
                        {LOCATION_OPTIONS.find((l) => l.value === interview.location)?.label}
                      </span>
                    </div>
                  )}
                  {interview.appliedDate && (
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 shrink-0" />
                      <span className="truncate">Applied: {new Date(interview.appliedDate).toLocaleDateString()}</span>
                    </div>
                  )}
                  {interview.interviewDate && (
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 shrink-0" />
                      <span className="truncate">Interview: {new Date(interview.interviewDate).toLocaleDateString()}</span>
                    </div>
                  )}
                  {interview.salary && (
                    <div className="flex items-center gap-1.5">
                      {interview.salaryCurrency === "jpy" ? (
                        <JapaneseYen className="h-3.5 w-3.5 shrink-0" />
                      ) : (
                        <IndianRupee className="h-3.5 w-3.5 shrink-0" />
                      )}
                      <span className="truncate">{interview.salary}</span>
                    </div>
                  )}
                  {interview.contactPerson && (
                    <div className="flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5 shrink-0" />
                      <span className="truncate">{interview.contactPerson}</span>
                    </div>
                  )}
                  {interview.contactEmail && (
                    <div className="flex items-center gap-1.5">
                      <Mail className="h-3.5 w-3.5 shrink-0" />
                      <span className="truncate">{interview.contactEmail}</span>
                    </div>
                  )}
                  {interview.jobUrl && (
                    <div className="flex items-center gap-1.5">
                      <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                      <a
                        href={interview.jobUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="truncate hover:text-primary transition-colors"
                      >
                        Job Posting
                      </a>
                    </div>
                  )}
                </div>
                {interview.notes && (
                  <>
                    <Separator className="my-2" />
                    <p className="text-xs sm:text-sm text-muted-foreground whitespace-pre-wrap">
                      {interview.notes}
                    </p>
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Add / Edit Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingId ? "Edit Interview" : "Add Interview"}</DialogTitle>
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
                  onValueChange={(v) => updateField("status", v as InterviewStatus)}
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
                  onValueChange={(v) => updateField("round", v as InterviewRound)}
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
                  onValueChange={(v) => updateField("source", v as InterviewSource)}
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
                  onValueChange={(v) => updateField("location", v as InterviewLocation)}
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
                    onValueChange={(v) => updateField("salaryCurrency", v as SalaryCurrency)}
                  >
                    <SelectTrigger className="w-[90px] shrink-0">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="inr">₹ INR</SelectItem>
                      <SelectItem value="jpy">¥ JPY</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    id="salary"
                    placeholder={form.salaryCurrency === "jpy" ? "e.g. 5,000,000" : "e.g. 12 LPA"}
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
              Are you sure you want to delete this interview? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleConfirmDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
