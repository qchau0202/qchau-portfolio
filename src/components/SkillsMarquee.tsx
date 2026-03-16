const skills = [
  "REACTJS", "NEXTJS", "PYTHON", "JAVA", "JAVASCRIPT",
  "MONGODB", "SUPABASE", "MYSQL", "GIT", "GITHUB",
  "POSTMAN", "DOCKER", "HTML", "CSS", "MERN STACK",
  "TRELLO", "JIRA", "NOTION",
];

const SkillsMarquee = () => {
  const separator = (
    <span className="mx-6 md:mx-8 text-muted-foreground select-none">/</span>
  );

  const renderSkills = () =>
    skills.map((skill, i) => (
      <span key={`${skill}-${i}`} className="inline-flex items-center">
        <span className="font-bold text-sm md:text-base tracking-[0.2em]">
          {skill}
        </span>
        {separator}
      </span>
    ));

  return (
    <section className="border-b border-foreground overflow-hidden">
      <div className="h-20 md:h-24 flex items-center">
        <div className="animate-marquee flex whitespace-nowrap">
          {renderSkills()}
          {renderSkills()}
        </div>
      </div>
    </section>
  );
};

export default SkillsMarquee;
