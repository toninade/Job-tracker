import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Briefcase, TrendingUp, Clock2 } from "lucide-react";
import TabswWthImages from "@/components/TabswWthImages";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col ">
      <main className="flex-1">
        <section className="container mx-auto px-4 py-32">
          <div className=" max-w-4xl text-center mx-auto">
            <h1 className="text-6xl font-bold mb-6">
              A better way to truck your job application
            </h1>
            <p className="mb-10 text-muted-foreground text-xl">
              Capture ,organize ,and manage your job search in one place
            </p>
            <div>
              <Link
                href="/sign-up"
                className=" flex items-center flex-col gap-4 mb-4"
              >
                <Button className=" h-12 px-8 text-lg font-medium " size={"lg"}>
                  Get started <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground">
                Free for ever, no cradit card required
              </p>
            </div>
          </div>
        </section>
        <TabswWthImages />

        <section className="py-16 border-t">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="py-10 px-5 ">
                <div className="mb-2 text-primary max-w-fit p-3 rounded-2xl bg-primary/30">
                  <Briefcase />
                </div>
                <h1 className="mb-4 text-3xl font-medium ">
                  Organize Applications
                </h1>
                <p className="text-gray-500">
                  Create custom boards and columns to track your job
                  applications at every stage of the process.
                </p>
              </div>

              <div className="py-10 px-5 ">
                <div className="mb-2 max-w-fit p-3 rounded-2xl bg-primary/30 text-primary">
                  <TrendingUp />
                </div>
                <h1 className="mb-4 text-3xl font-medium ">Track Progress</h1>
                <p className="text-gray-500">
                  Monitor your application status from applied to interview to
                  offer with visual Kanban boards.
                </p>
              </div>

              <div className="py-10 px-5 ">
                <div className="mb-2 max-w-fit p-3 rounded-2xl bg-primary/30  text-primary">
                  <Clock2 />
                </div>
                <h1 className="mb-4 text-3xl font-medium ">Stay Organized</h1>
                <p className="text-gray-500">
                  Never lose track of an application. Keep all your job search
                  information in one centralized place.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
