import React from "react";
import PortfolioLayout from "@/components/layout";

const Writing: React.FC = () => {
  return (
    <PortfolioLayout>
      <div className="min-h-screen bg-background px-6 py-16 text-foreground">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold">Writing</h1>
          <p className="mt-4 text-muted">
            Article index coming soon.
          </p>
        </div>
      </div>
    </PortfolioLayout>
  );
};

export default Writing;
