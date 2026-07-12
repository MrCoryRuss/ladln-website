"use client";

import Image from "next/image";
import { Lang } from "@/lib/i18n";

type BoardMember = {
  name: string;
  titleEn: string;
  titleEs: string;
  image: string;
  summaryEn: string;
  summaryEs: string;
  bioEn: string[];
  bioEs: string[];
};

const members: BoardMember[] = [
  {
    name: "John Rovens",
    titleEn: "Director of Resource Development",
    titleEs: "Director de Desarrollo de Recursos",
    image: "/board/john-rovens.png",
    summaryEn:
      "John leads donor acquisition, event planning, volunteerism, and membership development for Los Amigos.",
    summaryEs:
      "John dirige la adquisición de donantes, la planificación de eventos, el voluntariado y el desarrollo de membresía para Los Amigos.",
    bioEn: [
      "John Rovens leads donor acquisition and management for Los Amigos, along with event planning, which includes the annual Gigantic Garage Sale. In addition, he is our lead in promoting and fostering volunteerism and membership development.",
      "John is a serial entrepreneur in the professional leadership development field. He has consulted with companies and created intellectual property content and programs in the form of classroom and digital training for leaders at all organizational levels. His 30 years of experience as CEO and co-founder of BE GREAT LLC, an Oregon limited liability company (www.begreatllc.com), has honed his business and financial acumen in change management and the application of strategic and critical thinking skills within complex, high-performing organizations.",
    ],
    bioEs: [
      "John Rovens dirige la adquisición y gestión de donantes para Los Amigos, junto con la planificación de eventos, incluida la venta anual Gigantic Garage Sale. Además, lidera nuestros esfuerzos para promover y fomentar el voluntariado y el desarrollo de membresía.",
      "John es un emprendedor en serie en el campo del desarrollo profesional de liderazgo. Ha asesorado a empresas y creado contenido y programas de propiedad intelectual en forma de capacitación presencial y digital para líderes de todos los niveles organizacionales. Sus 30 años de experiencia como CEO y cofundador de BE GREAT LLC, una sociedad de responsabilidad limitada de Oregon (www.begreatllc.com), han fortalecido su criterio empresarial y financiero en gestión del cambio y en la aplicación del pensamiento estratégico y crítico dentro de organizaciones complejas y de alto desempeño.",
    ],
  },
  {
    name: "Kathy (KJ) Jackson",
    titleEn: "Director of Resource Development",
    titleEs: "Directora de Desarrollo de Recursos",
    image: "/board/kj.png",
    summaryEn:
      "KJ is leading an initiative to build deeper relationships with Spanish-speaking students and citizens in Mulegé.",
    summaryEs:
      "KJ lidera una iniciativa para establecer relaciones más profundas con estudiantes y ciudadanos hispanohablantes de Mulegé.",
    bioEn: [
      "Kathy Jackson is leading a new initiative at Los Amigos that is focused on establishing a more significant relationship with our Spanish-speaking Mulegé students and citizens. This critical strategy will ultimately enable us to better meet the diverse needs of our community and more fully engage with them in supporting our joint goals.",
      "KJ is a lover of Baja and all its beautiful people and locations. When at home in Montana, she spends her time with her three kids, eight grandkids, and favorite Frenchie canine friend, Poptart.",
    ],
    bioEs: [
      "Kathy Jackson lidera una nueva iniciativa en Los Amigos enfocada en establecer una relación más significativa con nuestros estudiantes y ciudadanos hispanohablantes de Mulegé. Esta estrategia crítica nos permitirá satisfacer mejor las diversas necesidades de nuestra comunidad y colaborar más plenamente con ella para apoyar nuestras metas compartidas.",
      "KJ ama Baja, su gente y sus hermosos lugares. Cuando está en casa en Montana, pasa su tiempo con sus tres hijos, ocho nietos y su perrita Frenchie favorita, Poptart.",
    ],
  },
  {
    name: "Sally Thomsen",
    titleEn: "Director of Program Development",
    titleEs: "Directora de Desarrollo de Programas",
    image: "/board/sally-thomsen.png",
    summaryEn:
      "Sally leads scholarship recruitment, selection, student liaison coordination, and CECyTE program development.",
    summaryEs:
      "Sally dirige el reclutamiento y selección de becarios, la coordinación de enlaces estudiantiles y el desarrollo de programas con CECyTE.",
    bioEn: [
      "Sally Thomsen's Los Amigos responsibilities include the leadership of our high school and university scholarship recruitment, selection, and funds distribution. In addition, she manages a team of four outstanding Student Liaisons who work with individual students to guide their academic success. She is also responsible for the generation of ideas and funding for our CECyTE infrastructure and curriculum development projects and is our primary contact with CECyTE high school administration leadership.",
      "Along with her husband, Sally owned and operated San Juan Kayak Expeditions, a more than 40-year-old business in Friday Harbor, Washington, prior to selling it in 2021. From 2000–2015, she was Director of the San Juan Island Parks and Recreation District, answering to the public and the Board of Commissioners. Her responsibilities included program and park development, financial planning and budget oversight, human resources, and strategic planning and partnership building. Life in Mulegé gives her plenty of time to enjoy paddleboarding, kayaking, sailing and swimming.",
    ],
    bioEs: [
      "Las responsabilidades de Sally Thomsen en Los Amigos incluyen liderar el reclutamiento, selección y distribución de fondos para nuestras becas de preparatoria y universidad. Además, dirige un equipo de cuatro destacados enlaces estudiantiles que trabajan con estudiantes individuales para guiar su éxito académico. También es responsable de generar ideas y financiamiento para nuestros proyectos de infraestructura y desarrollo curricular de CECyTE, y es nuestro contacto principal con el liderazgo administrativo de la preparatoria CECyTE.",
      "Junto con su esposo, Sally fue propietaria y operadora de San Juan Kayak Expeditions, un negocio de más de 40 años en Friday Harbor, Washington, antes de venderlo en 2021. De 2000 a 2015, fue Directora del Distrito de Parques y Recreación de San Juan Island, respondiendo al público y a la Junta de Comisionados. Sus responsabilidades incluyeron desarrollo de programas y parques, planificación financiera y supervisión presupuestaria, recursos humanos, planificación estratégica y creación de alianzas. La vida en Mulegé le da mucho tiempo para disfrutar del paddleboard, kayak, vela y natación.",
    ],
  },
  {
    name: "Terri Wolfe",
    titleEn: "Treasurer",
    titleEs: "Tesorera",
    image: "/board/terri-wolfe.png",
    summaryEn:
      "Terri oversees financial systems, banking relationships, funds distribution, and statutory reporting and compliance.",
    summaryEs:
      "Terri supervisa los sistemas financieros, relaciones bancarias, distribución de fondos y cumplimiento legal y fiscal.",
    bioEn: [
      "Terri Wolfe leads and manages a complex set of responsibilities, including our financial systems, banking relationships, funds distribution, and all statutory reporting and compliance.",
      "Terri is passionate about supporting educational opportunities for children and families. A retired CPA with a long career in accounting and financial management, she has dedicated many years to volunteering with education-focused nonprofits. As the mother of three now-grown sons, she believes strongly in the power of learning to transform lives.",
      "Terri and her husband also manage artist studios in San Francisco, where they enjoy supporting local artists and fostering creativity. When she is not volunteering or working with the arts community, Terri can often be found outdoors. She spends her summers biking and hiking in California's beautiful Sierra Nevada mountains and her winters paddle boarding in the warm waters around Mulegé. Terri brings a thoughtful, collaborative spirit and a deep commitment to community to everything she does.",
    ],
    bioEs: [
      "Terri Wolfe lidera y administra un conjunto complejo de responsabilidades, incluyendo nuestros sistemas financieros, relaciones bancarias, distribución de fondos y todos los informes y cumplimientos estatutarios.",
      "Terri siente pasión por apoyar oportunidades educativas para niños y familias. CPA jubilada con una larga carrera en contabilidad y gestión financiera, ha dedicado muchos años al voluntariado con organizaciones sin fines de lucro enfocadas en la educación. Como madre de tres hijos adultos, cree firmemente en el poder del aprendizaje para transformar vidas.",
      "Terri y su esposo también administran estudios de artistas en San Francisco, donde disfrutan apoyar a artistas locales y fomentar la creatividad. Cuando no está haciendo voluntariado o trabajando con la comunidad artística, a Terri a menudo se le encuentra al aire libre. Pasa sus veranos en bicicleta y caminando por las hermosas montañas Sierra Nevada de California y sus inviernos practicando paddleboard en las cálidas aguas alrededor de Mulegé. Terri aporta un espíritu considerado y colaborativo, además de un profundo compromiso con la comunidad, a todo lo que hace.",
    ],
  },
  {
    name: "Cory Russell",
    titleEn: "Chief Technology Officer",
    titleEs: "Director de Tecnología",
    image: "/board/cory-russell.jpg",
    summaryEn:
      "Cory brings technology leadership, entrepreneurship, and a belief in educational access to Los Amigos.",
    summaryEs:
      "Cory aporta liderazgo tecnológico, experiencia empresarial y una convicción en el acceso educativo a Los Amigos.",
    bioEn: [
      "Cory Russell is the Owner and Managing Director of Layer 7 Systems, a managed IT and AI solutions firm that he founded in 2007. A graduate of the University of Utah, Cory brings to Los Amigos his decades of leadership experience spanning entrepreneurship, network administration, and senior technical roles with major organizations including Verizon and Coldwater Creek.",
      "Cory and his wife Tracy maintain strong ties to both Naperville, Illinois, and Mulegé, Baja California Sur, and share a deep commitment to expanding educational opportunities. As parents of two sons (one a recent MBA graduate of Southern Methodist University and the other a student at Indiana University's Kelley School of Business), Cory and Tracy have seen the long-term impact that quality education can have on a young person's future. Cory's support of Los Amigos de Los Niños is grounded in the belief that access to a high school education is essential to ensure that students achieve long-term success and greater economic opportunity.",
    ],
    bioEs: [
      "Cory Russell es propietario y director general de Layer 7 Systems, una firma de soluciones administradas de TI e IA que fundó en 2007. Graduado de la University of Utah, Cory aporta a Los Amigos décadas de experiencia de liderazgo que abarcan emprendimiento, administración de redes y roles técnicos senior en grandes organizaciones como Verizon y Coldwater Creek.",
      "Cory y su esposa Tracy mantienen fuertes vínculos con Naperville, Illinois, y Mulegé, Baja California Sur, y comparten un profundo compromiso con ampliar las oportunidades educativas. Como padres de dos hijos (uno recién graduado con MBA de Southern Methodist University y el otro estudiante en Kelley School of Business de Indiana University), Cory y Tracy han visto el impacto a largo plazo que una educación de calidad puede tener en el futuro de un joven. El apoyo de Cory a Los Amigos de Los Niños se basa en la creencia de que el acceso a la educación preparatoria es esencial para que los estudiantes logren éxito a largo plazo y mayores oportunidades económicas.",
    ],
  },
  {
    name: "Tracy Russell",
    titleEn: "Secretary",
    titleEs: "Secretaria",
    image: "/board/tracy-russell.jpg",
    summaryEn:
      "Tracy brings a strong belief in discipline, growth, lifelong learning, and opportunity for Mulegé students.",
    summaryEs:
      "Tracy aporta una fuerte convicción en la disciplina, el crecimiento, el aprendizaje permanente y las oportunidades para estudiantes de Mulegé.",
    bioEn: [
      "Tracy Russell holds a master's degree in physical therapy and continues to maintain an active professional license through ongoing continuing education. Raised in Coeur d'Alene, Idaho, she brings to Los Amigos de Los Niños a strong personal and professional belief in the value of discipline, growth, and lifelong learning.",
      "Tracy and her husband Cory are the parents of two sons whose academic paths, including an MBA from Southern Methodist University and current study at Indiana University's Kelley School of Business, have reinforced their family's conviction that educational access creates meaningful opportunity. Tracy's commitment to Los Amigos de Los Niños reflects her belief that students in Mulegé deserve the support and resources necessary to complete high school, pursue their goals, and build strong futures for themselves and their communities.",
    ],
    bioEs: [
      "Tracy Russell tiene una maestría en fisioterapia y mantiene una licencia profesional activa mediante educación continua. Criada en Coeur d'Alene, Idaho, aporta a Los Amigos de Los Niños una fuerte convicción personal y profesional en el valor de la disciplina, el crecimiento y el aprendizaje permanente.",
      "Tracy y su esposo Cory son padres de dos hijos cuyas trayectorias académicas, incluyendo un MBA de Southern Methodist University y estudios actuales en Kelley School of Business de Indiana University, han reforzado la convicción de su familia de que el acceso educativo crea oportunidades significativas. El compromiso de Tracy con Los Amigos de Los Niños refleja su creencia de que los estudiantes de Mulegé merecen el apoyo y los recursos necesarios para completar la preparatoria, perseguir sus metas y construir futuros sólidos para ellos y sus comunidades.",
    ],
  },
];

export default function Leadership({ lang }: { lang: Lang }) {
  const heading = lang === "en" ? "Leadership" : "Liderazgo";
  const subheading =
    lang === "en"
      ? "The Los Amigos de Los Niños, Mulegé, Board of Directors"
      : "La Junta Directiva de Los Amigos de Los Niños, Mulegé";
  const intro =
    lang === "en"
      ? "Our all-volunteer Board of Directors is the governing body responsible for legal compliance, financial oversight, and strategic direction. These are unpaid, part-time positions, and they ensure that Los Amigos de Los Niños, Mulegé, Inc., stays true to its mission and serves the public interest."
      : "Nuestra Junta Directiva, integrada completamente por voluntarios, es el órgano de gobierno responsable del cumplimiento legal, la supervisión financiera y la dirección estratégica. Estos cargos son no remunerados y de medio tiempo, y aseguran que Los Amigos de Los Niños, Mulegé, Inc., se mantenga fiel a su misión y sirva al interés público.";

  return (
    <section id="leadership" className="py-20 bg-stone-50 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mb-10">
          <div className="text-terracotta font-semibold text-sm uppercase tracking-wider mb-2">
            {heading}
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-800 mb-3">
            {subheading}
          </h2>
          <p className="text-stone-600 leading-relaxed">{intro}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          {members.map((member) => {
            const title = lang === "en" ? member.titleEn : member.titleEs;
            const summary = lang === "en" ? member.summaryEn : member.summaryEs;
            const bio = lang === "en" ? member.bioEn : member.bioEs;

            return (
              <article
                key={member.name}
                className="bg-white border border-stone-200 rounded-3xl p-5 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={112}
                    height={112}
                    className="w-24 h-24 md:w-28 md:h-28 rounded-2xl object-cover bg-stone-100 shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-extrabold text-xl text-stone-800 leading-tight">
                      {member.name}
                    </h3>
                    <div className="text-sm font-semibold text-terracotta uppercase tracking-wider mt-1 mb-3">
                      {title}
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed">{summary}</p>
                  </div>
                </div>

                <details className="group mt-4 border-t border-stone-100 pt-4">
                  <summary className="cursor-pointer list-none text-sm font-semibold text-[#253E80] hover:underline">
                    <span className="group-open:hidden">
                      {lang === "en" ? "Read full bio" : "Leer biografía completa"}
                    </span>
                    <span className="hidden group-open:inline">
                      {lang === "en" ? "Hide bio" : "Ocultar biografía"}
                    </span>
                  </summary>
                  <div className="mt-3 space-y-3">
                    {bio.map((paragraph) => (
                      <p key={paragraph.slice(0, 48)} className="text-stone-600 text-sm leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </details>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
