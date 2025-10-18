// components/DomainsCovered.tsx

const domains = [
  { title: 'Frontend Developer', mentors: '27+', icon: '/icons/frontende.svg' },
  { title: 'Backend Developer', mentors: '120+', icon: '/icons/backendd.svg' },
  { title: 'Fullstack Developer', mentors: '86+', icon: '/icons/fullstacke.svg' },
  { title: 'DevOps / SRE', mentors: '22+', icon: '/icons/devops.svg' },
  { title: 'Data Analyst', mentors: '17+', icon: '/icons/dataa.svg' },
  { title: 'Data Scientist', mentors: '48+', icon: '/icons/datas.svg' },
  { title: 'Data Engineer', mentors: '21+', icon: '/icons/datae.svg' },
  { title: 'AI / ML', mentors: '48+', icon: '/icons/aiml.svg' },
  { title: 'Marketing', mentors: '13+', icon: '/icons/marketing.svg' },
  { title: 'Sales', mentors: '10+', icon: '/icons/sales.svg' },
  { title: 'Business Analyst', mentors: '27+', icon: '/icons/ba.svg' },
  { title: 'Finance', mentors: '6+', icon: '/icons/finance.svg' },
  { title: 'Product Manager', mentors: '32+', icon: '/icons/productm.svg' },
  { title: 'UI/UX Designer', mentors: '4+', icon: '/icons/ui.svg' },
  { title: 'Project Manager', mentors: '1+', icon: '/icons/pm.svg' },
  { title: 'Program Manager', mentors: '11+', icon: '/icons/pm.svg' },
];

export default function DomainsCovered() {
  return (
    <section className="w-full bg-white py-14 px-2">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#232323] mb-2">
          Every Domain Every Industry Covered
        </h2>
        <p className="text-center text-gray-500 mb-10 text-sm">
          Our mentors are equipped to guide you in any field you&apos;re passionate about
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[4px]">
          {domains.map((domain) => (
            <div
              key={domain.title}
              className="flex items-center gap-4 bg-white border border-gray-200 py-7 px-6 shadow-sm"
            >
              <img src={domain.icon} alt="" className="w-5 h-5 object-contain" />
              <div>
                <div className="text-[12px] font-medium text-[#232323]">{domain.title}</div>
                <div className="text-gray-400 text-xs">Browse {domain.mentors} Mentors</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
