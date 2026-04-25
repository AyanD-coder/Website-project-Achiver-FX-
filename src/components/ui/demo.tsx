import { CosmicParallaxBg } from "@/components/ui/parallax-cosmic-background";
import GradientCardShowcase from "@/components/ui/gradient-card-showcase";
import { Button } from "@/components/ui/joly-button";

const DemoOne = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <CosmicParallaxBg
        head="EaseMize"
        text="Easy, customizeable, Best"
        loop={true}
      />
    </div>
  );
};

const Demo = DemoOne;

export function GradientCardShowcaseDemo() {
  return <GradientCardShowcase />;
}

export default function ButtonDemo() {
  return <Button>Button</Button>;
}

export { Demo, DemoOne };
