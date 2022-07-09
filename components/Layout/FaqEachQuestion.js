import React from 'react'

export default function FaqEachQuestion({element}) {
    return (
        <div
            className="card border-0 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "fadeInUp",
            }}
        >
            <div className="card-header" id={"heading" + element.faq_id}>
                <h6
                    className="mb-0 collapsed"
                    data-toggle="collapse"
                    data-target={"#collapse" + element.faq_id}  
                    aria-controls={"collapse" + element.faq_id}  
                >
                    {element.question}
                    <span className="lni-chevron-up" />
                </h6>
            </div>
            <div
                className="collapse"
                id={"collapse" + element.faq_id}  
                aria-labelledby={"heading" + element.faq_id}
                data-parent="#faqAccordion"
            >
                <pre className="card-body ">
                    {element.answer}
                </pre>
            </div>
        </div>
    )
}
