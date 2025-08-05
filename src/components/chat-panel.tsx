"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import { useChat } from "./chat-provider";

export function ChatPanel() {
  const { isChatOpen, closeChat } = useChat();

  return (
    <AnimatePresence>
      {isChatOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-0 right-0 h-full w-full max-w-md bg-background border-l z-40"
        >
<div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold">Chat</h2>
              <Button variant="ghost" size="icon" onClick={closeChat}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex-1 p-4 overflow-y-auto">
              {/* Placeholder for chat messages */}
              <div className="flex flex-col gap-4">
                <div className="flex items-end gap-2">
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-sm">Hi there! How can I help you today?</p>
                  </div>
                </div>
                <div className="flex items-end gap-2 justify-end">
                  <div className="rounded-lg bg-primary text-primary-foreground p-3">
                    <p className="text-sm">I have a question about your projects.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 border-t">
              <form>
                <div className="relative">
                  <textarea
                    placeholder="Type a message..."
                    className="w-full resize-none rounded-lg border p-3 pr-16 text-sm"
                    rows={1}
                  />
                  <Button
                    type="submit"
                    size="icon"
                    className="absolute top-1/2 right-2 -translate-y-1/2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="m22 2-7 20-4-9-9-4Z" />
                      <path d="M22 2 11 13" />
                    </svg>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}