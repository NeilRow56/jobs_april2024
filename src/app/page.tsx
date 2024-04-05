import JobListItem from '@/components/jobs/JobListItem'
import { db } from '@/lib/db'

export default async function Home() {
  const jobs = await db.job.findMany({
    where: {
      approved: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })
  return (
    <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
      <div className="space-y-5 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-primary lg:text-5xl">
          Developer jobs
        </h1>
        <p className=" text-primary">Find your dream job.</p>
      </div>
      <section>
        <div className="space-y-4">
          {jobs.map((job) => (
            <JobListItem job={job} key={job.id} />
          ))}
        </div>
      </section>
    </main>
  )
}
