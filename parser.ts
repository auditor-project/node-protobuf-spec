/* eslint-disable */

export const protobufPackage = "parser";

export interface AuditStartRequest {
  fileName: string;
  projectId: string;
  signature: string;
}

export interface AuditStartResponse {
  requestId: string;
}

export interface ParserHandlerService {
  AuditStartProcessor(request: AuditStartRequest): Promise<AuditStartResponse>;
}
