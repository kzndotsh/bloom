import React, { useState } from 'react';

import { data } from './data';

import FamilyTree from './components/FamilyTree';
import Families from './components/Families';
import './styles.scss';

export const FamilyContext = React.createContext();

export default function App() {
    const [families] = useState(data);
    const [activeFamily, setActiveFamily] = useState(families[0]);

    return (
        <div className='App'>
            <FamilyContext.Provider
                value={{
                    activeFamily: activeFamily,
                    setActiveFamily: setActiveFamily,
                    families: families,
                }}>
                <Families />
                {activeFamily && <FamilyTree />}
            </FamilyContext.Provider>
        </div>
    );
}
