import { useState } from "react";

export default function AdminPricingSettings() {
  const [kronToUsd, setKronToUsd] = useState(0);
  const [usdToSyp, setUsdToSyp] = useState(0);
  const [partner1, setPartner1] = useState(0);
  const [partner2, setPartner2] = useState(0);
  const [partner3, setPartner3] = useState(0);
  const [transportFee, setTransportFee] = useState(0);
  const [extraFees, setExtraFees] = useState(0);

  const handleSave = () => {
    console.log({
      kronToUsd,
      usdToSyp,
      partner1,
      partner2,
      partner3,
      transportFee,
      extraFees,
    });
    alert("تم حفظ الأسعار بنجاح!");
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#111827',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '600px',
        backgroundColor: '#1f2937',
        padding: '2rem',
        borderRadius: '1rem',
        boxShadow: '0 0 15px rgba(0,0,0,0.3)'
      }}>
        <h2 style={{ fontSize: '24px', textAlign: 'center', marginBottom: '1.5rem' }}>إعدادات الأسعار</h2>

        <div style={{ marginBottom: '1rem' }}>
          <label>سعر صرف الكرون إلى الدولار</label>
          <input type="number" value={kronToUsd} onChange={(e) => setKronToUsd(parseFloat(e.target.value))} style={inputStyle} />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>سعر صرف الدولار إلى الليرة السورية</label>
          <input type="number" value={usdToSyp} onChange={(e) => setUsdToSyp(parseFloat(e.target.value))} style={inputStyle} />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>نسبة ربح الشريك الأول (%)</label>
          <input type="number" value={partner1} onChange={(e) => setPartner1(parseFloat(e.target.value))} style={inputStyle} />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>نسبة ربح الشريك الثاني (%)</label>
          <input type="number" value={partner2} onChange={(e) => setPartner2(parseFloat(e.target.value))} style={inputStyle} />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>نسبة ربح الشريك الثالث (%)</label>
          <input type="number" value={partner3} onChange={(e) => setPartner3(parseFloat(e.target.value))} style={inputStyle} />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>أجور النقل (%)</label>
          <input type="number" value={transportFee} onChange={(e) => setTransportFee(parseFloat(e.target.value))} style={inputStyle} />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>أجور إضافية (ليرة أو نسبة)</label>
          <input type="number" value={extraFees} onChange={(e) => setExtraFees(parseFloat(e.target.value))} style={inputStyle} />
        </div>

        <button onClick={handleSave} style={{
          width: '100%',
          padding: '0.75rem',
          backgroundColor: '#059669',
          border: 'none',
          borderRadius: '0.5rem',
          color: 'white',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          حفظ الأسعار
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.5rem',
  marginTop: '0.25rem',
  backgroundColor: '#374151',
  border: '1px solid #4b5563',
  borderRadius: '0.375rem',
  color: 'white'
};
