import PagesCard from "@/components/PagesCard";
import { Box, Stack } from "@mui/material";
import { RiScissorsFill } from "react-icons/ri";
import ServicesCard from "../../components/ServicesCard";
import { GiBeard, GiRazor, GiComb } from "react-icons/gi";
import BookingCard from "../../components/BookingCard";

export default function Services() {
  return (
    <>
      <PagesCard
        title="Our Services"
        description="Premium Grooming 
for the Modern Man"
      ></PagesCard>
      <Stack spacing={3} sx={{ mt: 1, mb: 1 }}>
        <ServicesCard
          icon={<RiScissorsFill size={48} style={{ color: "#ff6b00" }} />}
          title="The Classic Cut"
          description="Our signature haircut includes a detailed consultation, precise scissor and clipper work, and finished with styling"
          childrenSx={{ textAlign: "right", mt: 1 }}
        >
          Price: $30
        </ServicesCard>
        <ServicesCard
          icon={<GiBeard size={48} style={{ color: "#ff6b00" }} />}
          title="Beard Trim & Shape"
          description="Precision beard grooming with detailed shaping and trimming to define your jawline and style"
          childrenSx={{ textAlign: "right", mt: 1 }}
        >
          Price: $25
        </ServicesCard>

        <ServicesCard
          icon={<GiRazor size={48} style={{ color: "#ff6b00" }} />}
          title="Traditional Shave"
          description="Classic straight razor shave with hot towel treatment and premium aftershave care"
          childrenSx={{ textAlign: "right", mt: 1 }}
        >
          Price: $35
        </ServicesCard>

        <ServicesCard
          icon={<GiComb size={48} style={{ color: "#ff6b00" }} />}
          title="Hair & Beard Combo"
          description="Complete grooming package including haircut and beard trim for the ultimate fresh look"
          childrenSx={{ textAlign: "right", mt: 1 }}
        >
          Price: $50
        </ServicesCard>
      </Stack>
      <Box sx={{ mt: 2, mb: 1 }}>
        <BookingCard title={"Ready To Book?"}></BookingCard>
      </Box>
    </>
  );
}
