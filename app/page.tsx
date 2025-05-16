import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text"

export default function Home() {
  return (
    <div>
      <Text variant={"primaryBold"} content={"Hello World!"}/>
      <div className="flex gap-2">
        <Button variant={("primary")} text={"Primary Button"} />
        <Button variant={("secondary")} text={"Secondary Button"} />
        <Button variant={("tertiary")} text={"Tertiary Button"} />
      </div>
    </div>
  );
}
