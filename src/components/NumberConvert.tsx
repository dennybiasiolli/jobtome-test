import { Button, Container, TextField } from '@material-ui/core';

import React, { useRef, useState } from 'react';
import { numberToEnglish } from '../utilities/NumberConvert';

export interface NumberConvertProps extends React.PropsWithChildren<{}> { };

export function NumberConvert(props: NumberConvertProps) {
    const [state, setState] = useState({
        outputString: '',
    });
    const inputNumber = useRef<HTMLInputElement>(null);
    return (<Container>
        <h2>
            Insert a number, then click on the `Convert` button.<br />
            The number will be converted in an english string.
        </h2>
        <div>
            <TextField
                type="number"
                fullWidth
                variant="outlined"
                placeholder="Insert numeric value here"
                inputRef={inputNumber}
            />
        </div>
        <br />
        <div>
            <Button
                variant="contained"
                color="primary"
                onClick={handleNumberToEnglish}>
                Convert number
            </Button>
        </div>
        <br />
        <div>
            <TextField
                fullWidth
                disabled
                variant="outlined"
                placeholder="String value will appear here"
                value={state.outputString}
            />
        </div>
    </Container>);

    function handleNumberToEnglish() {
        if (inputNumber.current) {
            setState({
                outputString: numberToEnglish(inputNumber.current.value)
            });
        }
    }
}
