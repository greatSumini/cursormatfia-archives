"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function MCPGuideModal() {
  const deeplink =
    "cursor://anysphere.cursor-deeplink/mcp/install?name=vooster-ai&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIi0tcGFja2FnZT1Adm9vc3Rlci9tY3AiLCJ2b29zdGVyLWFpIiwiLS1hcGkta2V5PWFrX3gwNWpvc2kxa3N0MXZqbWhxcDI0MDJmdSJdfQ==";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="btn-primary">MCP 가이드</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>MCP 서버 사용 가이드</DialogTitle>
        </DialogHeader>
        <p className="text-sm text-gray-600 mt-2">
          Vooster AI MCP 서버를 Cursor에 설치하려면 아래 버튼을 클릭하세요.
        </p>
        <div className="mt-4">
          <Button asChild className="btn-primary">
            <a href={deeplink}>Cursor로 바로 연동하기</a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default MCPGuideModal;
