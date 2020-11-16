import React from 'react';
import { Link } from 'react-router-dom';

export default function MainView() {
    return <>
            <h3>Список вариантов i18l</h3>
            <Link to="/react-intl">react-intl</Link>
            <Link to="/ligui">lingui</Link>
            <Link to="/i18next">i18next</Link>
        </>;
}
