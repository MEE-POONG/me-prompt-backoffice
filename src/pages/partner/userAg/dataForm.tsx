import { useAPIContext } from '@/components/APIContext';
import { APIParams, AppFormData } from '@/components/APIContext/type';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const DataForm: React.FC = () => {
    const { setObjects } = useAPIContext();
    const [apiParams, setApiParams] = useState<APIParams>({ page: 1, pageSize: 1, total: 1 });
    const [formData, setFormData] = useState<AppFormData>({ selectType: [], keyword: "", caseCheck: "" });
    const [newTypeName, setNewTypeName] = useState("");
    const [newValue, setNewValue] = useState("");

    const handleAddOption = () => {
        if (newTypeName) {
            setFormData(prev => ({
                ...prev,
                selectType: [...prev.selectType, { typeName: newTypeName, value: newValue || "" }]
            }));
            // Clear the input fields
            setNewTypeName("");
            setNewValue("");
        }
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setObjects(apiParams, formData);
    };

    return (
        <Card>
            <Card.Body>
                <div>
                    <label>Page:
                        <input type="number" value={apiParams.page} onChange={e => setApiParams(prev => ({ ...prev, page: Number(e.target.value) }))} />
                    </label>
                    <label>Page Size:
                        <input type="number" value={apiParams.pageSize} onChange={e => setApiParams(prev => ({ ...prev, pageSize: Number(e.target.value) }))} />
                    </label>
                    <label>Total:
                        <input type="number" value={apiParams.total} onChange={e => setApiParams(prev => ({ ...prev, total: Number(e.target.value) }))} />
                    </label>
                </div>

                {/* Form Data Inputs (You already have this) */}
                <div>
                    <label>Select Type:
                        <div>
                            <label>Select Type:
                                <table>
                                    <thead>
                                        <tr>
                                            <td>
                                                type
                                            </td>
                                            <td>
                                                value
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {formData.selectType.map(item => (
                                            <tr key={item.value}>
                                                <td>
                                                    {item.typeName}
                                                </td>
                                                <td>
                                                    {item.value}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </label>
                        </div>

                        {/* Inputs for adding a new option */}
                        <div>
                            <label>New Type Name:
                                <input type="text" value={newTypeName} onChange={e => setNewTypeName(e.target.value)} />
                            </label>
                            <label>New Value:
                                <input type="text" value={newValue} onChange={e => setNewValue(e.target.value)} />
                            </label>
                            <button onClick={handleAddOption}>Add Option</button>
                        </div>
                    </label>
                    <label>Keyword:
                        <input type="text" value={formData.keyword} onChange={e => setFormData(prev => ({ ...prev, keyword: e.target.value }))} />
                    </label>
                    {/* Assuming caseCheck is a checkbox */}
                    <label>Command:
                        <select value={formData.caseCheck} onChange={e => setFormData(prev => ({ ...prev, caseCheck: e.target.value as AppFormData["caseCheck"] }))}>
                            <option value="">--Select Command--</option>
                            <option value="Get">Get</option>
                            <option value="GetID">GetID</option>
                            <option value="Search">Search</option>
                            <option value="Post">Post</option>
                            <option value="Push">Push</option>
                            <option value="Delete">Delete</option>
                        </select>
                    </label>
                </div>

                {/* URL Data Inputs */}

                <button onClick={handleSubmit}>
                    Submit
                </button>
            </Card.Body>
        </Card>
    );
};

export default DataForm;