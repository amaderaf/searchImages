import Button from "../Atoms/Button";
import { Flex } from "../Layout/styles";

export default function ListOfButtons({
  buttonsText,
  handleButton,
}: {
  buttonsText: string[];
  handleButton: (param: string) => void;
}): React.ReactElement {
  return (
    <Flex justify="space-between">
      {buttonsText.map((buttonText: string) => (
        <Button
          key={buttonText}
          buttonText={buttonText}
          handleButton={handleButton}
        />
      ))}
    </Flex>
  );
}
