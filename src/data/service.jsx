import { Brush, Droplets, Scissors, Thermometer } from "lucide-react";
import { TbRazorElectric } from "react-icons/tb";

const service = [
  {
    name: "Haircut",
    description: `Precision haircuts tailored to your style. Whether it's a
                classic taper, modern fade, or trendy crop, our barbers ensure
                you walk out sharp and confident.`,
    icon: <Scissors size={48} />,
  },
  {
    name: "Hairwash",
    description: `A relaxing hair wash using premium shampoo and scalp massage
                techniques to cleanse and refresh your hair before or after your
                haircut.`,
    icon: <Droplets size={48} />,
  },
  {
    name: "Hot Towel",
    description: `Experience a soothing hot towel treatment that opens pores,
                softens facial hair, and preps your skin for the ultimate shave
                or relaxation.`,
    icon: <Thermometer size={48} />,
  },
  {
    name: "Shaving",
    description: `A clean, smooth shave using traditional straight razors and warm
                lather for precision and comfort. Includes post-shave balm for
                refreshed skin.`,
    icon: <TbRazorElectric size={48} />,
  },
  {
    name: "Basic Coloring",
    description: `Enhance or refresh your look with basic hair coloring services.
                Ideal for covering grays or trying subtle tones without full dye
                jobs.`,
    icon: <Brush size={48} />,
  },
];

export default service;
