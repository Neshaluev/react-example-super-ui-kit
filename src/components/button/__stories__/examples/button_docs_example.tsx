import * as React from 'react';
import {DocsExample} from '../../../../docs/doc_example';
import {Button} from '../../button';

export function ButtonExampleViewAction() {
    return (
        <DocsExample>
            <Button color="primary">Create</Button>
            <Button color="success">Connect</Button>
            <Button color="error">Error</Button>
        </DocsExample>
    );
}

ButtonExampleViewAction.code = `
<Button color="base">Create</Button>
<Button view="primary" >
    Connect
</Button>
`.trim();
