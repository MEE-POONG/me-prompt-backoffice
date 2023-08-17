import { APIParams, AppFormData, UrlData } from '@/components/APIContext/type';
import React, { useState } from 'react';

const DataForm: React.FC = () => {
  const [apiParams, setApiParams] = useState<APIParams>({ page: 0, pageSize: 0, total: 0 });
  const [formData, setFormData] = useState<AppFormData>({ selectType: [], keyword: "" });
  const [urlData, setUrlData] = useState<UrlData>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("API Params:", apiParams);
    console.log("Form Data:", formData);
    console.log("URL Data:", urlData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ... (API Params Inputs) ... */}

      {/* Form Data Inputs */}
      <div>
        <label>Select Type:
          <select multiple value={formData.selectType} onChange={e => setFormData(prev => ({ ...prev, selectType: Array.from(e.target.selectedOptions, option => option.value) }))}>
            <option value="aaa">AAA</option>
            <option value="bbb">BBB</option>
            <option value="ccc">CCC</option>
          </select>
        </label>
        <label>Keyword: <input type="text" value={formData.keyword} onChange={e => setFormData(prev => ({ ...prev, keyword: e.target.value }))} /></label>
      </div>

      {/* ... (URL Data Inputs) ... */}
    </form>
  );
};

export default DataForm;