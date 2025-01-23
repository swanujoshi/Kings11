import { useState } from 'react';
import { ArrowLeft, ChevronRight, Info, X, DollarSign, Edit2, Check } from 'lucide-react'
import './MyBalance.css'

export default function MyBalance() {
  const [editMode, setEditMode] = useState({
    totalBalance: false,
    unutilised: false,
    winning: false,
    cashBonus: false
  });

  const [balanceData, setBalanceData] = useState({
    totalBalance: '150.00',
    unutilised: '0',
    winning: '0.39',
    cashBonus: '0'
  });

  const handleBack = () => {
    window.history.back();
  };

  const toggleEdit = (field) => {
    setEditMode(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChange = (field, value) => {
    setBalanceData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // Here you would typically send the updated data to a server
    console.log('Saving data:', balanceData);
    setEditMode({
      totalBalance: false,
      unutilised: false,
      winning: false,
      cashBonus: false
    });
  };

  return (
    <div className="balance-container">
      

      {/* Header */}
      <header className="balance-header">
        <button onClick={handleBack} className="back-button">
          <ArrowLeft size={24} />
        </button>
        <h1 className="header-title">My Balance</h1>
      </header>

      {/* Main Content */}
      <main className="balance-content">
        {/* Total Balance Section */}
        <section className="total-balance">
          <h2 className="balance-label">TOTAL BALANCE</h2>
          <div className="editable-balance">
            {editMode.totalBalance ? (
              <input
                type="number"
                value={balanceData.totalBalance}
                onChange={(e) => handleChange('totalBalance', e.target.value)}
                className="balance-input"
              />
            ) : (
              <p className="balance-amount">₹ {balanceData.totalBalance}</p>
            )}
            <button className="edit-button" onClick={() => toggleEdit('totalBalance')}>
              {editMode.totalBalance ? <Check size={20} /> : <Edit2 size={20} />}
            </button>
          </div>
          <button className="add-cash-button">ADD CASH</button>
        </section>

        {/* Balance Details */}
        <div className="balance-details">
          <div className="balance-row">
            <div className="balance-info">
              <span className="detail-label">AMOUNT ADDED (UNUTILISED)</span>
              <div className="editable-detail">
                {editMode.unutilised ? (
                  <input
                    type="number"
                    value={balanceData.unutilised}
                    onChange={(e) => handleChange('unutilised', e.target.value)}
                    className="detail-input"
                  />
                ) : (
                  <span className="detail-amount">₹ {balanceData.unutilised}</span>
                )}
                <button className="edit-button" onClick={() => toggleEdit('unutilised')}>
                  {editMode.unutilised ? <Check size={20} /> : <Edit2 size={20} />}
                </button>
              </div>
            </div>
            <button className="info-button">
              <Info size={20} />
            </button>
          </div>

          <div className="balance-row">
            <div className="balance-info">
              <span className="detail-label">WINNING</span>
              <div className="editable-detail">
                {editMode.winning ? (
                  <input
                    type="number"
                    value={balanceData.winning}
                    onChange={(e) => handleChange('winning', e.target.value)}
                    className="detail-input"
                  />
                ) : (
                  <span className="detail-amount">₹ {balanceData.winning}</span>
                )}
                <button className="edit-button" onClick={() => toggleEdit('winning')}>
                  {editMode.winning ? <Check size={20} /> : <Edit2 size={20} />}
                </button>
              </div>
            </div>
            <button className="withdraw-button">WITHDRAW INSTANTLY</button>
            <button className="info-button">
              <Info size={20} />
            </button>
          </div>

          <div className="balance-row">
            <div className="balance-info">
              <span className="detail-label">CASH BONUS</span>
              <div className="editable-detail">
                {editMode.cashBonus ? (
                  <input
                    type="number"
                    value={balanceData.cashBonus}
                    onChange={(e) => handleChange('cashBonus', e.target.value)}
                    className="detail-input"
                  />
                ) : (
                  <span className="detail-amount">₹ {balanceData.cashBonus}</span>
                )}
                <button className="edit-button" onClick={() => toggleEdit('cashBonus')}>
                  {editMode.cashBonus ? <Check size={20} /> : <Edit2 size={20} />}
                </button>
              </div>
            </div>
            <button className="info-button">
              <Info size={20} />
            </button>
          </div>
        </div>

        {/* Save Button - Only shown when any field is in edit mode */}
        {Object.values(editMode).some(Boolean) && (
          <button className="save-all-button" onClick={handleSave}>
            Save Changes
          </button>
        )}

        {/* Bonus Info Banner */}
        <div className="bonus-banner">
          <DollarSign className="bonus-icon" size={24} />
          <p className="bonus-text">
            Maximum usable Cash Bonus per match = 10% of Entry Fees
            <button className="know-more-button">Know more</button>
          </p>
          <button className="close-button">
            <X size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="navigation-links">
          <a href="#" className="nav-item">
            <div className="nav-content">
              <h3 className="nav-title">My Recent Transaction</h3>
            </div>
            <ChevronRight size={24} />
          </a>

          <a href="#" className="nav-item">
            <div className="nav-content">
              <h3 className="nav-title">Manage Payments</h3>
              <p className="nav-subtitle">Add/Remove Cards,Wallets, etc.</p>
            </div>
            <ChevronRight size={24} />
          </a>

          <a href="#" className="nav-item">
            <div className="nav-content">
              <h3 className="nav-title">KYC Details</h3>
            </div>
            <ChevronRight size={24} />
          </a>

          <a href="#" className="nav-item">
            <div className="nav-content">
              <h3 className="nav-title">Refer and Earn</h3>
              <p className="nav-subtitle">Invite a friend and collect up to 500 cash bonus</p>
            </div>
            <ChevronRight size={24} />
          </a>
        </nav>
      </main>
    </div>
  )
}
