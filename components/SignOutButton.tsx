"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/actions/auth.action";
import { LogOut } from "lucide-react";

export default function SignOutButton() {
  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <Button
      variant="ghost"
      className="flex items-center gap-2 text-primary-100 hover:text-red-600 cursor-pointer"
      onClick={handleSignOut}
    >
      <LogOut size={18} />
      Sign Out
    </Button>
  );
}
