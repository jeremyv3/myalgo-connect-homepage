import MyAlgoConnect, { Accounts } from "@randlabs/myalgo-connect";
import React, { MouseEvent, useState } from "react";
import { Button, Col, Label, Row } from "reactstrap";
import PrismCode from './commons/Code';
import { connection } from '../utils/connections';

const myAlgoWallet = new MyAlgoConnect({ bridgeUrl: "https://dev.myalgo.com/bridge" });

const code = `
import MyAlgoConnect from '@randlabs/myalgo-connect';

const myAlgoConnect = new MyAlgoConnect();

const accounts = await myAlgoConnect.connect({ shouldSelectOneAccount: true });
`;

export default function ConnectExample(): JSX.Element {
    const [accounts, setAccounts] = useState<Accounts[]>([]);

    const onClick = async (e: MouseEvent): Promise<void> => {
        e.preventDefault();
        try {
            const sharedAccounts = await myAlgoWallet.connect({ shouldSelectOneAccount: true });
            setAccounts(sharedAccounts);
            window.sharedAccounts = sharedAccounts;
        }
        catch (err) {
            console.error(err);
        }
    }

    const onClearResponse = (): void => {
        setAccounts([]);
    }

    return (
        <Row className="connect-example-content interactive-example">
            <Col xs="12" lg="6">
                <Label className="tx-label">
                    Code
                    </Label>
                <div className="connect-code2">
                    <PrismCode code={code} language="js" />
                </div>
                <Button
                    className="button-margin"
                    color="primary"
                    block
                    onClick={onClick}>
                    Connect
                </Button>
            </Col>
            <Col xs="12" lg="6">
                <Label className="tx-label">
                    connect() Response
                </Label>
                <div className="response-base code-connect-example">
                    <PrismCode
                        code={accounts.length ? JSON.stringify(accounts, null, 1) : ""}
                        language="js"
                        plugins={["response"]}
                    />
                </div>
                <Button
                    className="button-margin"
                    color="primary"
                    block
                    disabled={!accounts.length}
                    onClick={onClearResponse}>
                    Clear Method Response
                </Button>
            </Col>
        </Row>
    )
}
