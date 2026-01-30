import React from 'react'
import SectionHeader from './SectionHeader'
import Card from './Card'

const Education = () => {
    const educationData = [
        {
            type: 'Academic Education',
            items: [
                {
                    title: 'BSc in Computer Science',
                    institution: 'BITS Pilani',
                    period: 'Currently Pursuing',
                    icon: '🎓'
                }
            ]
        },
        {
            type: 'Professional Training',
            items: [
                {
                    title: 'Frontend Development & Coding',
                    institution: 'NxtWave Institution of Technologies',
                    period: 'Certified',
                    icon: '💻'
                }
            ]
        }
    ]

    return (
        <section id="education" className="section">
            <SectionHeader
                title="Education & Training"
                subtitle="My academic background and professional certifications"
            />

            <div className="education-container">
                {educationData.map((category, idx) => (
                    <div key={idx} className="education-column">
                        <h3 className="education-category-title">
                            {category.type}
                        </h3>
                        <div className="education-list">
                            {category.items.map((item, i) => (
                                <Card key={i} variant="default" className="education-card">
                                    <div className="education-card-content">
                                        <div className="education-icon">{item.icon}</div>
                                        <div className="education-details">
                                            <h4 className="education-title">
                                                {item.title}
                                            </h4>
                                            <p className="education-institution">
                                                {item.institution}
                                            </p>
                                            <span className="education-period">
                                                {item.period}
                                            </span>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Education
