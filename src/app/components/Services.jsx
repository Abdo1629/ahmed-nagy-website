import {
  AcademicCapIcon,
  BriefcaseIcon,
  UserGroupIcon,
  DocumentTextIcon,
  ChatBubbleBottomCenterTextIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'HR Training – 20-Hour Program',
    description:
      'A practical course covering the fundamentals of HR—from recruitment to performance evaluation. Ideal for 0–5 years of experience.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Soft Skills Course',
    description:
      'Practical training on emotional intelligence, communication, leadership, and problem-solving tailored to workplace challenges.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: 'HR Department Setup (For Startups)',
    description:
      'Helping growing businesses design and establish HR functions from scratch—optimized for the Saudi and Egyptian markets.',
    icon: BuildingOfficeIcon,
  },
  {
    name: 'CV Writing (ATS-Friendly)',
    description:
      'Professional resume writing services aligned with Applicant Tracking Systems (ATS) to highlight your strengths and boost interview chances.',
    icon: DocumentTextIcon,
  },
  {
    name: 'LinkedIn Profile Optimization',
    description:
      'We build and refine your LinkedIn profile to attract recruiters, reflect your true value, and elevate your online presence.',
    icon: BriefcaseIcon,
  },
  {
    name: '1:1 Career Coaching',
    description:
      'Personalized sessions to help you switch careers, grow in your current role, or ace interviews with confidence.',
    icon: UserGroupIcon,
  },
]

export default function Features() {
  return (
    <div id='services' className=" bg-[#F5F7FA] py-24 sm:py-32">
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
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-lg font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex h-12 w-12 items-center justify-center rounded-lg bg-[#0056D2]">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
