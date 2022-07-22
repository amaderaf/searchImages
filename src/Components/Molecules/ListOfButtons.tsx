import { Button } from "Components";

export function ListOfButtons({
  buttonsText,
  handleButton,
}: {
  buttonsText: string[];
  handleButton: (param: string) => void;
}): React.ReactElement {
  return (
    <>
      {buttonsText.map((buttonText: string) => (
        <Button
          key={buttonText}
          buttonText={buttonText}
          handleButton={handleButton}
        />
      ))}
    </>
  );
}
