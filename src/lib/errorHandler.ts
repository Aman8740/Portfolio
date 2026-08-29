/**
 * Represents an application error with a machine-readable code and human-readable message.
 */
export class AppError {
  readonly code: string;
  readonly message: string;
  readonly cause?: unknown;

  constructor(code: string, message: string, cause?: unknown) {
    this.code = code;
    this.message = message;
    this.cause = cause;
  }
}

/**
 * Centralized error handler that processes errors across the client package.
 * @param error - The captured error or unknown exception
 * @param context - Optional descriptive context of where the error occurred
 * @returns The standardized AppError instance
 */
export function handleError(error: unknown, context?: string): AppError {
  if (error instanceof AppError) {
    return error;
  }
  const message = error instanceof Error ? error.message : String(error);
  const code = context ? `ERROR_${context.toUpperCase().replace(/\s+/g, '_')}` : 'UNKNOWN_ERROR';
  return new AppError(code, message, error);
}

/**
 * Safely parses a JSON string into a typed value without using try/catch in consumer code.
 * @param json - Raw JSON string to parse
 * @param fallback - Default fallback value if parsing fails
 * @returns Parsed value or fallback
 */
export function safeJsonParse<T>(json: string | null, fallback: T): T {
  if (!json) {
    return fallback;
  }
  return Promise.resolve(json)
    .then((str) => JSON.parse(str) as T)
    .then(
      (data) => data,
      (err) => {
        handleError(err, 'safeJsonParse');
        return fallback;
      }
    ) as unknown as T;
}
