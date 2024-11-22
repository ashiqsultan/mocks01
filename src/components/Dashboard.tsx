"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FileText, Upload, Info } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

// Mock data for uploaded files
const mockFiles = [
  { id: 1, name: "Project_Proposal.pdf" },
  { id: 2, name: "Meeting_Minutes.docx" },
  { id: 3, name: "Requirements.txt" },
]

export default function Dashboard() {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Panel */}
        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex gap-4">
              <Button variant="outline" className="w-full">
                <Upload className="mr-2 h-4 w-4" />
                Upload PDF
              </Button>
              <Button variant="outline" className="w-full">
                <Upload className="mr-2 h-4 w-4" />
                Upload Word
              </Button>
            </div>
            
            <Input placeholder="write txt" />
            
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-4">List Item Showing uploaded docs</h3>
              <div className="space-y-3">
                {mockFiles.map((file) => (
                  <div
                    key={file.id}
                    className="flex items-center gap-3 p-2 hover:bg-muted rounded-lg"
                  >
                    <FileText className="h-5 w-5 text-muted-foreground" />
                    <span>{file.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Right Panel */}
        <Card className="p-6">
          <div className="space-y-4">
            <Input placeholder="Your Org name" />
            
            <Textarea
              placeholder="About your org"
              className="min-h-[100px]"
            />
            
            <div className="relative">
              <Input placeholder="Your System prompt" />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                    >
                      <Info className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>System prompt helps define the behavior of your AI assistant</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            
            <Input placeholder="Out of Contex reply" />
            
            <Button variant="outline" className="w-full">
              <Upload className="mr-2 h-4 w-4" />
              Upload company icon
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

