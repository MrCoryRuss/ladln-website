export type Lang = "en" | "es";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      students: "Students",
      donate: "Donate",
      membership: "Membership",
      news: "News",
      volunteer: "Volunteer",
    },
    hero: {
      tagline: "Supporting students since 1976",
      subtitle:
        "Los Amigos de Los Niños provides scholarships, learning support, and encouragement to students in Mulegé, Baja California Sur, Mexico.",
      cta_donate: "Donate Now",
      cta_students: "Meet the Students",
    },
    impact: {
      heading: "Our Impact",
      stat1_num: "50+",
      stat1_label: "Students Supported",
      stat2_num: "1976",
      stat2_label: "Founded",
      stat3_num: "501(c)(3)",
      stat3_label: "Nonprofit",
      stat4_num: "100%",
      stat4_label: "Volunteer-Run",
    },
    mission: {
      heading: "Our Mission",
      body: "We believe education is a life-long gift. Many students in the Mulegé area come from remote ranches — some so far that high school students must arrange their own housing near school. Since local family incomes are low, many families cannot cover these additional costs. Los Amigos de Los Niños steps in to make it possible.",
      subheading: "What We Fund",
      items: [
        "High school & university scholarships",
        "Support for boarding facility programs",
        "Chromebook laptops & backpacks for new students",
        "Annual Christmas Fiesta for boarding students",
      ],
    },
    education: {
      heading: "Education in Mexico",
      body: "School is mandatory from grades 1–12. Students from outlying ranches ages 4–14 may live in a government boarding facility during the week. Students 15–18 attending Mulegé high school must arrange their own housing — a significant cost for rural families.",
      levels: [
        { name: "Primaria", desc: "Elementary school" },
        { name: "Secundaria", desc: "Middle school" },
        { name: "CECyT", desc: "High school" },
        { name: "Tecnológico", desc: "Technology college" },
        { name: "Universidad", desc: "University" },
      ],
    },
    donate: {
      heading: "Support a Student",
      intro:
        "Los Amigos de Los Niños is a 501(c)(3) public charity. Your donations may be tax-deductible and we can provide a receipt.",
      zeffy_heading: "Donate via Zeffy",
      zeffy_body:
        "Donate by direct debit (ACH), debit card, or credit card with absolutely no processing fees charged to LADLN.",
      zeffy_btn: "Donate via Zeffy",
      zelle_heading: "Donate via Zelle",
      zelle_body: "Use mobile # 208-315-0029. Please include your name, email, and phone number with a description (donation, membership, etc.) in the message field.",
      check_heading: "Donate via Check",
      check_payable: "Make check payable to:",
      check_mail: "Mail your check to:",
      check_name: "LOS AMIGOS DE LOS NINOS, Inc.",
      check_address: "Los Amigos De Los Niños Mulegé\nc/o Feeley\nP.O. Box 2236\nMcCall, ID 83638-2236",
      questions: "Questions? Contact us at:",
    },
    membership: {
      heading: "Become a Member",
      intro:
        "Your membership directly funds student scholarships. Every dollar makes a difference.",
      tiers: [
        {
          name: "Bronze",
          amount: "$75",
          desc: "Equivalent to 1 semester for a high school student. Includes one membership.",
          color: "amber",
        },
        {
          name: "Silver",
          amount: "$150",
          desc: "Equivalent to 1 year for a high school student. Includes one membership + $75 donation, or two memberships for a couple.",
          color: "slate",
        },
        {
          name: "Gold",
          amount: "$300",
          desc: "Equivalent to 1 year for 2 high school students. Includes one membership + $225 donation.",
          color: "yellow",
        },
        {
          name: "Diamond",
          amount: "$600",
          desc: "Equivalent to 1 year for a college student. Includes one membership + $525 donation.",
          color: "sky",
        },
      ],
      chromebook: "$65 — Samsung Chromebook (reconditioned) + backpack for each first-time scholarship student.",
      non_member: "Non-member donation — any amount that fits your budget. All donations help!",
      cta: "Join or Donate via Zeffy",
    },
    news: {
      heading: "News & Updates",
      read_more: "Read more →",
    },
    students: {
      heading: "Meet Our Students",
      intro:
        "Every student we support has a story of determination, sacrifice, and big dreams. Here are some of them.",
      hs_heading: "Current High School Students (CECyTE)",
      univ_heading: "University & College Students",
      grad_heading: "Recent Graduates",
      seniors: "Seniors",
      juniors: "Juniors",
      sophomores: "Sophomores",
    },
    volunteer: {
      heading: "Volunteer with Us",
      body: "Volunteers are a vital part of Los Amigos de Los Niños. Your skills can further our mission — whether it's teaching English, music, art, Spanish/English translation, organizing fundraising events, or maintaining this website.",
      cta: "Get in Touch",
      contact: "losamigosmulege@gmail.com",
    },
    footer: {
      tagline: "Supporting students in Mulegé, Baja California Sur since 1976.",
      contact: "Contact",
      follow: "Follow Us",
      rights: "All rights reserved.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Nosotros",
      students: "Estudiantes",
      donate: "Donar",
      membership: "Membresía",
      news: "Noticias",
      volunteer: "Voluntariado",
    },
    hero: {
      tagline: "Apoyando estudiantes desde 1976",
      subtitle:
        "Los Amigos de Los Niños otorga becas, apoyo educativo y ánimo a los estudiantes de Mulegé, Baja California Sur, México.",
      cta_donate: "Donar Ahora",
      cta_students: "Conoce a los Estudiantes",
    },
    impact: {
      heading: "Nuestro Impacto",
      stat1_num: "50+",
      stat1_label: "Estudiantes Apoyados",
      stat2_num: "1976",
      stat2_label: "Fundación",
      stat3_num: "501(c)(3)",
      stat3_label: "Organización Sin Fines de Lucro",
      stat4_num: "100%",
      stat4_label: "Voluntarios",
    },
    mission: {
      heading: "Nuestra Misión",
      body: "Creemos que la educación es un regalo de por vida. Muchos estudiantes de la región de Mulegé provienen de ranchos remotos — algunos tan lejos que los estudiantes de preparatoria deben arreglar su propio alojamiento cerca de la escuela. Dado que los ingresos familiares locales son bajos, muchas familias no pueden cubrir estos costos adicionales. Los Amigos de Los Niños interviene para hacerlo posible.",
      subheading: "Qué Financiamos",
      items: [
        "Becas para preparatoria y universidad",
        "Apoyo a programas de internado",
        "Chromebooks y mochilas para nuevos becarios",
        "Fiesta navideña anual para estudiantes del internado",
      ],
    },
    education: {
      heading: "Educación en México",
      body: "La escuela es obligatoria del grado 1 al 12. Los estudiantes de ranchos lejanos de 4 a 14 años pueden vivir en un internado gubernamental durante la semana. Los estudiantes de 15 a 18 años que asisten a la preparatoria de Mulegé deben arreglar su propio alojamiento — un costo significativo para las familias rurales.",
      levels: [
        { name: "Primaria", desc: "Escuela primaria" },
        { name: "Secundaria", desc: "Escuela secundaria" },
        { name: "CECyT", desc: "Preparatoria" },
        { name: "Tecnológico", desc: "Universidad tecnológica" },
        { name: "Universidad", desc: "Universidad" },
      ],
    },
    donate: {
      heading: "Apoya a un Estudiante",
      intro:
        "Los Amigos de Los Niños es una organización pública 501(c)(3). Tus donaciones pueden ser deducibles de impuestos y podemos proporcionar un recibo.",
      zeffy_heading: "Donar a través de Zeffy",
      zeffy_body:
        "Dona con débito directo (ACH), tarjeta de débito o crédito sin cargos de procesamiento para LADLN.",
      zeffy_btn: "Donar vía Zeffy",
      zelle_heading: "Donar a través de Zelle",
      zelle_body: "Usa el número móvil 208-315-0029. Por favor incluye tu nombre, correo y teléfono con una descripción (donación, membresía, etc.) en el campo de mensaje.",
      check_heading: "Donar con Cheque",
      check_payable: "Hacer el cheque a nombre de:",
      check_mail: "Enviar el cheque a:",
      check_name: "LOS AMIGOS DE LOS NINOS, Inc.",
      check_address: "Los Amigos De Los Niños Mulegé\nc/o Feeley\nP.O. Box 2236\nMcCall, ID 83638-2236",
      questions: "¿Preguntas? Contáctanos en:",
    },
    membership: {
      heading: "Hazte Miembro",
      intro:
        "Tu membresía financia directamente las becas estudiantiles. Cada dólar hace la diferencia.",
      tiers: [
        {
          name: "Bronce",
          amount: "$75",
          desc: "Equivalente a 1 semestre para un estudiante de preparatoria. Incluye una membresía.",
          color: "amber",
        },
        {
          name: "Plata",
          amount: "$150",
          desc: "Equivalente a 1 año para un estudiante de preparatoria. Incluye una membresía + donación de $75, o dos membresías para una pareja.",
          color: "slate",
        },
        {
          name: "Oro",
          amount: "$300",
          desc: "Equivalente a 1 año para 2 estudiantes de preparatoria. Incluye una membresía + donación de $225.",
          color: "yellow",
        },
        {
          name: "Diamante",
          amount: "$600",
          desc: "Equivalente a 1 año para un estudiante universitario. Incluye una membresía + donación de $525.",
          color: "sky",
        },
      ],
      chromebook: "$65 — Samsung Chromebook (reacondicionado) + mochila para cada nuevo becario.",
      non_member: "Donación sin membresía — cualquier cantidad que se ajuste a tu presupuesto. ¡Toda donación ayuda!",
      cta: "Únete o Dona vía Zeffy",
    },
    news: {
      heading: "Noticias y Actualizaciones",
      read_more: "Leer más →",
    },
    students: {
      heading: "Conoce a Nuestros Estudiantes",
      intro:
        "Cada estudiante que apoyamos tiene una historia de determinación, sacrificio y grandes sueños. Aquí están algunos de ellos.",
      hs_heading: "Estudiantes de Preparatoria (CECyTE)",
      univ_heading: "Estudiantes Universitarios",
      grad_heading: "Graduados Recientes",
      seniors: "Cuarto año",
      juniors: "Tercer año",
      sophomores: "Segundo año",
    },
    volunteer: {
      heading: "Sé Voluntario",
      body: "Los voluntarios son una parte vital de Los Amigos de Los Niños. Tus habilidades pueden ayudar a nuestra misión — ya sea enseñando inglés, música, arte, traducción, organizando eventos de recaudación de fondos o manteniendo este sitio web.",
      cta: "Contáctanos",
      contact: "losamigosmulege@gmail.com",
    },
    footer: {
      tagline: "Apoyando estudiantes en Mulegé, Baja California Sur desde 1976.",
      contact: "Contacto",
      follow: "Síguenos",
      rights: "Todos los derechos reservados.",
    },
  },
};

export type Translations = typeof translations.en;
