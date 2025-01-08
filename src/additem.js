import { useLocation } from 'react-router-dom';
import Axios from 'axios';
import Path from './path';
import './additem.css';

import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddItem = ({ setPage, setPlace, setBarcode, setSuccess }) => {
    const location = useLocation();
    const [caseId, setCaseId] = useState('');
    const [cat, setCat] = useState('drugs');
    const [box, setBox] = useState('box_1');
    const [depId, setDepId] = useState('');
    const [depName, setDepName] = useState('');
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [weaponType, setWeaponType] = useState('');
    const [liquidType, setLiquidType] = useState('');

    useEffect(() => {
        const newCaseId = generateAlphanumericId();
        setCaseId(newCaseId);
    }, []);

    const generateAlphanumericId = () => {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        let result = '';
        for (let i = 0; i < 3; i++) {
            result += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        for (let i = 0; i < 4; i++) {
            result += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }
        return result;
    };

    const handleAdd = async () => {
        if (!caseId || !cat || !box || !depId || !depName) {
            console.error('All fields are required.');
            return;
        }

        const itemData = {
            caseId,
            cat,
            weaponType: cat === 'weapon' ? weaponType : undefined,
            liquidType: cat === 'liquid' ? liquidType : undefined,
            box,
            depId,
            depName,
            ps: location.state,
        };

        if (box === 'new') {
            itemData.len = length;
            itemData.wid = width;
            itemData.hei = height;

            if (!length || !width || !height) {
                console.error('All dimensions are required for a new box.');
                return;
            }
        }

        try {
            const res = await Axios.post('http://localhost:5000/additem', itemData);
            if (res.data.mes === 'New Item Created') {
                setPlace(res.data.loc);
                setBarcode(res.data.bar);
                setSuccess(true);
            } else {
                console.error('Unexpected response:', res.data);
            }
            setPage('AfterCreate');
        } catch (error) {
            if (error.response) {
                console.error('Server responded with an error:', error.response.data);
            } else if (error.request) {
                console.error('No response received:', error.request);
            } else {
                console.error('Error in setting up request:', error.message);
            }
        }
    };

    // Box options based on category
    const getBoxOptions = () => {
        switch (cat) {
            case 'weapon':
                return (
                    <>
                        <option value="box_1">Weapons 1</option>
                        <option value="box_2">Weapons 2</option>
                        <option value="new">New Size</option>
                    </>
                );
            case 'drugs':
                return (
                    <>
                        <option value="box_3">Drugs</option>
                        <option value="new">New Size</option>
                    </>
                );
            case 'liquid':
                return (
                    <>
                        <option value="box_4">Liquid 1</option>
                        <option value="box_5">Liquid 2</option>
                        <option value="new">New Size</option>
                    </>
                );
            case 'document':
                return (
                    <>
                        <option value="s_bag">Document 1</option>
                        <option value="m_bag">Document 2m</option>
                        <option value="new">New Size</option>
                    </>
                );
            case 'ornament':
                return (
                    <>
                        <option value="l_bag">Cash / Jewellery</option>
                        <option value="new">New Size</option>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="add_item_div">
            <Path cur_page="Add Item" cur_path="Home / Add Item / Storage /" />
            <div className="create_item_form filtered_data">
                <div className="form_details_text">ADD THE ITEM DETAILS:</div>
                <div className="form_item">
                    <p>Case ID:</p>
                    <input
                        type="text"
                        value={caseId}
                        readOnly
                    />
                </div>
                <div className="form_item">
                    <p>Item Category:</p>
                    <select name="item_cat" onChange={(e) => { setCat(e.target.value); setWeaponType(''); setLiquidType(''); }}>
                        <option value="drugs">Drugs</option>
                        <option value="weapon">Weapon</option>
                        <option value="liquid">Liquid</option>
                        <option value="document">Document</option>
                        <option value="ornament">Cash / Jewellery</option>
                    </select>
                </div>

                {cat === 'weapon' && (
                    <div className="form_item">
                        <p>Weapon Type:</p>
                        <select name="weapon_type" onChange={(e) => setWeaponType(e.target.value)}>
                            <option value="">Select Weapon Type</option>
                            <option value="Melee Weapons">Melee Weapons</option>
                            <option value="Ranged Weapons">Ranged Weapons</option>
                            <option value="Explosive Weapons">Explosive Weapons</option>
                            <option value="Energy Weapons">Energy Weapons</option>
                            <option value="Thrown Weapons">Thrown Weapons</option>
                        </select>
                    </div>
                )}

                {cat === 'liquid' && (
                    <div className="form_item">
                        <p>Liquor Type:</p>
                        <select name="liquid_type" onChange={(e) => setLiquidType(e.target.value)}>
                            <option value="">Select Liquor Type</option>
                            <option value="Whiskey">Whiskey</option>
                            <option value="Vodka">Vodka</option>
                            <option value="Rum">Rum</option>
                            <option value="Gin">Gin</option>
                            <option value="Tequila">Tequila</option>
                        </select>
                    </div>
                )}

                <div className="form_item">
                    <p>Box Used:</p>
                    <select name="box_cat" onChange={(e) => setBox(e.target.value)}>
                        {getBoxOptions()}
                    </select>
                </div>

                {box === 'new' && (
                    <div>
                        <div className="form_item">
                            <p>Expected Length:</p>
                            <input type="number" onChange={(e) => setLength(e.target.value)} />
                        </div>
                        <div className="form_item">
                            <p>Expected Width:</p>
                            <input type="number" onChange={(e) => setWidth(e.target.value)} />
                        </div>
                        <div className="form_item">
                            <p>Expected Height:</p>
                            <input type="number" onChange={(e) => setHeight(e.target.value)} />
                        </div>
                    </div>
                )}

                <div className="form_item">
                    <p>ID of Depositor:</p>
                    <input type="text" required onChange={(e) => setDepId(e.target.value)} />
                </div>
                <div className="form_item">
                    <p>Name of Depositor:</p>
                    <input type="text" required onChange={(e) => setDepName(e.target.value)} />
                </div>
                <button type="submit" className="item_submit_button" onClick={handleAdd}>ADD ITEM</button>
            </div>
        </div>
    );
}

export default AddItem;
