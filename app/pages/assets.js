import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient'; // Import your Supabase client

export default function Assets() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    async function fetchAssets() {
      const { data, error } = await supabase.from('assets').select('*');
      if (error) console.error(error);
      setAssets(data);
    }
    fetchAssets();
  }, []);

  return (
    <div>
      <h1>Available Assets</h1>
      <ul>
        {assets.map((asset) => (
          <li key={asset.id}>{asset.property_name}</li>
        ))}
      </ul>
    </div>
  );
}
