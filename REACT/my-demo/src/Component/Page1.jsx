import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Page1 = () => {

    const functionname = () => {
        console.log("Button is clicked");
    }

    const individual = () => {
        alert("Button clicked");
    }

    return (
        <div>

            <Button variant="text" onClick={functionname}>
                Text
            </Button>

            <Button variant="contained" onClick={individual}>
                Contained
            </Button>

            <Button variant="outlined" onClick={individual}>Outlined</Button>
            <Button variant="text" component="a"
                href="https://mui.com/material-ui/react-button/"
                target="_blank">On</Button>


            <ButtonGroup variant="contained" aria-label="Basic button group" onClick={individual}>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
            
        </div>
    );
}

export default Page1;
