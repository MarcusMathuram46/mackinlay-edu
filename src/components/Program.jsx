import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaUserTie,
  FaChartLine,
  FaShoppingCart,
  FaBusinessTime,
  FaMoneyBillWave,
} from 'react-icons/fa'
import '../style/NavBar.css'

const programCategories = [
  { name: 'HR', icon: <FaUserTie /> },
  { name: 'Marketing', icon: <FaChartLine /> },
  { name: 'Sales', icon: <FaShoppingCart /> },
  { name: 'Business Analyst', icon: <FaBusinessTime /> },
  { name: 'Finance', icon: <FaMoneyBillWave /> },
]

const programs = {
  HR: [
    { title: 'HR Leadership Program', duration: '6 months', mode: 'Online' },
  ],
  Marketing: [
    {
      title: 'Marketing Strategy Course',
      duration: '5 months',
      mode: 'Classroom',
    },
  ],
  Sales: [
    {
      title: 'Sales Mastery Certification',
      duration: '8 months',
      mode: 'Online',
    },
  ],
  'Business Analyst': [
    {
      title: 'Business Analytics Program',
      duration: '12 months',
      mode: 'Online',
    },
  ],
  Finance: [
    {
      title: 'Finance Management Course',
      duration: '10 months',
      mode: 'Hybrid',
    },
  ],
}

const quickLinks = [
  { title: 'Salary Builder', desc: 'Compare your salary v/s peers' },
  { title: 'Career Growth', desc: 'Enhance your career path' },
  { title: 'On-Demand Webinars', desc: 'Watch recorded webinars' },
]

const Program = ({ showDropdown, setShowDropdown }) => {
  const [selectedCategory, setSelectedCategory] = useState('Popular')

  return (
    showDropdown && (
      <motion.div
        className="dropdown-menu-container"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
      >
        <div className="dropdown-content">
          {/* Sidebar */}
          <div className="sidebar">
            <h5 className="sidebar-title">Programs</h5>
            <div
              className="sidebar-item"
              onClick={() => setSelectedCategory('Popular')}
            >
              ⭐ Popular
            </div>
            {programCategories.map((category, index) => (
              <div
                key={index}
                className="sidebar-item"
                onClick={() => setSelectedCategory(category.name)}
              >
                {category.icon} <span>{category.name}</span>
              </div>
            ))}
          </div>

          {/* Programs */}
          <div className="programs">
            <h5>{selectedCategory} Programs</h5>
            <div className="program-grid">
              {(selectedCategory === 'Popular'
                ? Object.values(programs).flat()
                : programs[selectedCategory] || []
              ).map((program, index) => (
                <div key={index} className="program-card">
                  <h6>{program.title}</h6>
                  <p>
                    {program.duration} • {program.mode}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="quick-links">
            <h5>Quick Links</h5>
            {quickLinks.map((link, index) => (
              <div key={index} className="quick-link-item">
                <strong>{link.title}</strong>
                <p>{link.desc}</p>
              </div>
            ))}
            <button
              className="close-btn"
              onClick={() => setShowDropdown(false)}
            >
              ✖
            </button>
          </div>
        </div>
      </motion.div>
    )
  )
}

export default Program
