import React from "react";

function Card(props) {
  return (
        <div class="pricing-plan">
          <div class="pricing-plan-header">
            <h1 class="pricing-plan-title">{props.plan}</h1>
            <h2 class="pricing-plan-summary">{props.price}</h2>
          </div>
          <div class="pricing-plan-description">
            <ul class="pricing-plan-list">
              <li class="pricing-plan-feature">{props.user}</li>
              <li class="pricing-plan-feature">{props.storage}</li>
              <li class="pricing-plan-feature">{props.publicProjects}</li>
              <li class="pricing-plan-feature">{props.communityAccess}</li>
              <li class="pricing-plan-feature">{props.privateProjects}</li>
              <li class="pricing-plan-feature">{props.phoneSupport}</li>
              <li class="pricing-plan-feature">{props.subDomain}</li>
              <li class="pricing-plan-feature">{props.statusPlan}</li>
            </ul>
          </div>

          <div class="pricing-plan-action">
            <a href="#" class="pricing-plan-button">
              purchase
            </a>
          </div>
        </div>
      
   
  );
}

export default Card;
