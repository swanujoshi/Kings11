import React, { useState } from 'react';
import { ArrowLeft,  Smartphone, Mail, CreditCard, Building2, Edit2, Check } from 'lucide-react'
import './KYC.css'

export default function KYC() {
  const [editMode, setEditMode] = useState({
    mobile: false,
    email: false,
    panCard: false,
    bankAccount: false
  });

  const [userData, setUserData] = useState({
    mobile: '8200210305',
    email: 'messi10@gmail.com',
    panCard: 'AB******72',
    bankAccount: '*********57'
  });

  const handleBack = () => {
    window.history.back();
  };

  const toggleEdit = (field) => {
    setEditMode(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChange = (field, value) => {
    setUserData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // Here you would typically send the updated data to a server
    console.log('Saving data:', userData);
    setEditMode({
      mobile: false,
      email: false,
      panCard: false,
      bankAccount: false
    });
  };

  const renderField = (field, label, icon) => {
    const Icon = icon;
    return (
      <div className="verification-item">
        <div className="icon-wrapper">
          <Icon size={24} />
        </div>
        <div className="info-wrapper">
          <div className="label-wrapper">
            <span className="label">{label}</span>
            <span className="verified-badge">VERIFIED</span>
          </div>
          {editMode[field] ? (
            <input
              type="text"
              value={userData[field]}
              onChange={(e) => handleChange(field, e.target.value)}
              className="edit-input"
            />
          ) : (
            <span className="value">{userData[field]}</span>
          )}
        </div>
        <button className="edit-button" onClick={() => toggleEdit(field)}>
          {editMode[field] ? <Check size={20} /> : <Edit2 size={20} />}
        </button>
      </div>
    );
  };

  return (
    <div className="kyc-container">
      

      {/* Header */}
      <header className="kyc-header">
        <button onClick={handleBack} className="back-button">
          <ArrowLeft size={24} />
        </button>
        <h1 className="header-title">Verify Account</h1>
      </header>

      {/* Main Content */}
      <main className="kyc-content">
        {renderField('mobile', 'Mobile Number', Smartphone)}
        {renderField('email', 'Email Address', Mail)}
        {renderField('panCard', 'Pan Card', CreditCard)}
        {renderField('bankAccount', 'Bank Account', Building2)}

        <button className="save-button" onClick={handleSave}>
          Save Changes
        </button>
      </main>
    </div>
  )
}

