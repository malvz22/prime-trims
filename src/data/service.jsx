import { Brush, Droplets, Scissors, Thermometer } from "lucide-react";
import { TbRazorElectric } from "react-icons/tb";

const service = [
  {
    name: "Haircut",
    description: `Precision haircuts tailored to your style. Whether it's a
                classic taper, modern fade, or trendy crop, our barbers ensure
                you walk out sharp and confident.`,
    bgColor: "bg-[#1E293B]",
    textColor: "text-[#F8FAFC]",
    icon: <Scissors size={48} />,
  },
  {
    name: "Hairwash",
    description: `A relaxing hair wash using premium shampoo and scalp massage
                techniques to cleanse and refresh your hair before or after your
                haircut.`,
    bgColor: "bg-[#0E7490]",
    textColor: "text-[#F0F9FF]",
    icon: <Droplets size={48} />,
  },
  {
    name: "Hot Towel",
    description: `Experience a soothing hot towel treatment that opens pores,
                softens facial hair, and preps your skin for the ultimate shave
                or relaxation.`,
    bgColor: "bg-[#B45309]",
    textColor: "text-[#FEF3C7]",
    icon: <Thermometer size={48} />,
  },
  {
    name: "Shaving",
    description: `A clean, smooth shave using traditional straight razors and warm
                lather for precision and comfort. Includes post-shave balm for
                refreshed skin.`,
    bgColor: "bg-[#334155]",
    textColor: "text-[#E2E8F0]",
    icon: <TbRazorElectric size={48} />,
  },
  {
    name: "Basic Coloring",
    description: `Enhance or refresh your look with basic hair coloring services.
                Ideal for covering grays or trying subtle tones without full dye
                jobs.`,
    bgColor: "bg-[#7C3AED]",
    textColor: "text-[#F5F3FF]",
    icon: <Brush size={48} />,
  },
];

export default service;
