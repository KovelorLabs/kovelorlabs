
import { Card, CardContent } from '@/components/ui/card';

const TechnologiesSection = () => {
  const technologies = [
    {
      category: 'Frontend',
      techs: ['React', 'Vue.js', 'Angular', 'TypeScript', 'Next.js', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      techs: ['Node.js', 'Python', 'Java', 'C#', 'Go', 'PostgreSQL']
    },
    {
      category: 'Cloud & DevOps',
      techs: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform']
    },
    {
      category: 'AI & Data',
      techs: ['TensorFlow', 'PyTorch', 'OpenAI', 'Pandas', 'Apache Spark', 'MongoDB']
    },
    {
      category: 'Mobile',
      techs: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo', 'Firebase']
    },
    {
      category: 'Integration',
      techs: ['REST APIs', 'GraphQL', 'Webhooks', 'Zapier', 'Salesforce', 'HubSpot']
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technologies <span className="text-gradient">We Master</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We work with cutting-edge technologies and proven frameworks to deliver 
            robust, scalable, and future-proof solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((category, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-kovelor-orange/30">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-kovelor-orange">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium hover:bg-kovelor-orange/10 hover:text-kovelor-orange transition-colors duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Don't see the technology you need? We're always learning and adapting.
          </p>
          <span className="text-kovelor-orange font-medium">Let's discuss your specific requirements</span>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
