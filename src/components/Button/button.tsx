import "./button.css"

interface Props {
    label: string;
    parentMethod: () => void;
}

export const Button = ({ label, parentMethod }: Props) => {
    return (
        <Button className="custom-button" onClick={parentMethod}>
            {label}
        </Button>
    );
};
