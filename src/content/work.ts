import type { L } from "@/i18n/useLang";
import { images } from "@/lib/images";

export const workCopy = {
  title: { np: "हालैका काम", en: "Recent Work" } satisfies L,
  intro: {
    np: "सामुदायिक आयोजनादेखि संसदीय प्रयाससम्म — अर्थपूर्ण परिवर्तनका लागि गरिएका काम र पहलहरू।",
    en: "From community projects to legislative efforts, explore the work and initiatives focused on creating meaningful change.",
  } satisfies L,
  viewAll: { np: "सबै काम हेर्नुहोस्", en: "View All Work" } satisfies L,
};

/**
 * SAMPLE CONTENT — structural placeholders only. Replace with real,
 * verified project details (dates, locations, outcomes) before launch.
 * No specific achievement or outcome is asserted as fact here.
 */
export const work: Array<{
  id: string;
  title: L;
  category: L;
  description: L;
  image: string;
  status: L;
  location: L;
  problem: L;
  action: L;
  result: L;
}> = [
  {
    id: "school",
    title: { np: "सामुदायिक विद्यालय सहयोग", en: "Community School Support" },
    category: { np: "शिक्षा", en: "Education" },
    description: {
      np: "नवलपरासी-१ का स्थानीय विद्यालयको पूर्वाधार र पहुँच सुधार्न सहकार्य गर्दै।",
      en: "Working with local schools in Nawalparasi-1 to improve facilities and access.",
    },
    image: images.work.education,
    status: { np: "जारी", en: "In progress" },
    location: { np: "बर्दघाट नगरपालिका", en: "Bardaghat Municipality" },
    problem: {
      np: "धेरै वडाका विद्यालयमा आधारभूत कक्षाकोठा पूर्वाधारको अभाव छ।",
      en: "Several ward schools lack basic classroom infrastructure.",
    },
    action: {
      np: "नगरपालिका र विद्यालय व्यवस्थापन समितिसँग सहयोग योजनामा समन्वय गर्दै।",
      en: "Coordinating with the municipality and school boards on a support plan.",
    },
    result: {
      np: "पहल अगाडि बढ्दै जाँदा यकिन गरिनेछ।",
      en: "To be confirmed as the initiative progresses.",
    },
  },
  {
    id: "clinics",
    title: { np: "मोबाइल स्वास्थ्य सेवा", en: "Mobile Health Outreach" },
    category: { np: "स्वास्थ्य", en: "Health" },
    description: {
      np: "स्वास्थ्य सेवामा पहुँच कम भएका वडाहरूमा मोबाइल क्लिनिकको सम्भावना केलाउँदै।",
      en: "Exploring mobile clinic outreach for wards with limited healthcare access.",
    },
    image: images.work.healthcare,
    status: { np: "प्रस्तावित", en: "Proposed" },
    location: { np: "नवलपरासी-१ का वडाहरू", en: "Nawalparasi-1 wards" },
    problem: {
      np: "कतिपय वडा नजिकैको स्वास्थ्य चौकीबाट धेरै टाढा छन्।",
      en: "Some wards are far from the nearest health post.",
    },
    action: {
      np: "प्रदेश स्वास्थ्य कार्यालयसँग सम्भाव्यता अध्ययन गर्दै।",
      en: "Assessing feasibility with the provincial health office.",
    },
    result: {
      np: "पहल अगाडि बढ्दै जाँदा यकिन गरिनेछ।",
      en: "To be confirmed as the initiative progresses.",
    },
  },
  {
    id: "roads",
    title: { np: "स्थानीय सडक स्तरोन्नति", en: "Local Road Upgrades" },
    category: { np: "पूर्वाधार", en: "Infrastructure" },
    description: {
      np: "निर्वाचन क्षेत्रभरि सडक र ढल सुधारका लागि आवाज उठाउँदै।",
      en: "Advocating for road and drainage improvements across the constituency.",
    },
    image: images.work.infrastructure,
    status: { np: "जारी", en: "In progress" },
    location: { np: "बर्दघाट सुस्ता पश्चिम", en: "Bardaghat Susta West" },
    problem: {
      np: "मौसमी बाढीले कच्ची सडकहरूलाई क्षति पुर्‍याउँछ।",
      en: "Seasonal flooding damages unpaved local roads.",
    },
    action: {
      np: "सम्बन्धित पूर्वाधार मन्त्रालयसमक्ष विषय राख्दै।",
      en: "Raising the issue with the relevant infrastructure ministry.",
    },
    result: {
      np: "पहल अगाडि बढ्दै जाँदा यकिन गरिनेछ।",
      en: "To be confirmed as the initiative progresses.",
    },
  },
];
