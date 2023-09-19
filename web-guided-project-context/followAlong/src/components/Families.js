import React from 'react';
import { useContext } from 'react';
import '../styles.scss';
import { FamilyContext } from '../App';

const Families = () => {
    const familyContext = useContext(FamilyContext);
    console.log(familyContext);
    return (
        <section className='header'>
            <h1>Family Trees</h1>
            {familyContext.families.map((family) => (
                <button
                    className={`family-button ${
                        family.familyName ===
                            familyContext.activeFamily.familyName && 'active'
                    }`}
                    key={family.familyName}
                    onClick={() => familyContext.setActiveFamily(family)}>
                    {family.familyName}
                </button>
            ))}
        </section>
    );
};

export default Families;
