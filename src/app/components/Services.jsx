import {
  AcademicCapIcon,
  BriefcaseIcon,
  UserGroupIcon,
  DocumentTextIcon,
  ChatBubbleBottomCenterTextIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const features = [
{
    name: 'HR Training – 20-Hour Program',
    description: 'A practical course covering the fundamentals of HR—from recruitment to performance evaluation. Ideal for 0–5 years of experience.',
    icon: AcademicCapIcon,
    link: "/hr-course",
    },
    {
    name: 'Soft Skills Course',
    description: 'Practical training on emotional intelligence, communication, leadership, and problem-solving tailored to workplace challenges.',
    icon: ChatBubbleBottomCenterTextIcon,
    link: "/soft-skills",
    },
    {
    name: 'HR Department Setup (For Startups)',
    description: 'Helping growing businesses design and establish HR functions from scratch—optimized for the Saudi and Egyptian markets.',
    icon: BuildingOfficeIcon,
    link: "hr-setup",
  },
  {
    name: 'CV Writing (ATS-Friendly)',
    description:'Professional resume writing services aligned with Applicant Tracking Systems (ATS) to highlight your strengths and boost interview chances.',
    icon: DocumentTextIcon,
    link: " ",
  },
  {
    name: 'LinkedIn Profile Optimization',
    description: 'We build and refine your LinkedIn profile to attract recruiters, reflect your true value, and elevate your online presence.',
    icon: BriefcaseIcon,
    link: "/linkedin-profile-optmizition",
  },
  {
    name: '1:1 Career Coaching',
    description: 'Personalized sessions to help you switch careers, grow in your current role, or ace interviews with confidence.',
    icon: UserGroupIcon,
    link: "/career-coaching",
  },
]

export default function Features() {
  return (
    <div id='services' className=" bg-[#F5F7FA] py-8 sm:py-15">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-sm font-semibold text-[#0056D2] tracking-wide uppercase">What We Offer</h2>
          <p className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
            Services Tailored for Individuals & Businesses
          </p>
          <p className="mt-6 text-lg text-gray-700">
            From fresh graduates to startups—we provide practical, market-oriented HR support to help you grow and succeed.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-12">
            {features.map((feature) => (
                <Link key={feature.name} href={feature.link}>
                <div className="relative bg-gray-200 shadow-md pl-16 review py-5 px-5 rounded-md">
                <div className="flex text-lg font-semibold text-gray-900">
                <div className=" flex h-12 w-12 items-center justify-center rounded-lg bg-[#0056D2]">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
  <div className="pl-2 w-100 max-[530px]:w-80 max-[375px]:w-50 max-[450px]:w-60 max-[1022px]:w-90 min-[1022px]:w-75" >{feature.name}</div>
                </div>
                <dd className="mt-2 text-base text-gray-600">{feature.description}</dd>
            </div>
                </Link>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
