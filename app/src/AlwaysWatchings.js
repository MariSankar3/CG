import React from "react";
import "./AlwaysWatchings.css";

export default function AlwaysWatchings({ className }) {
  return (
    <div className={className}>
        <div className="join-box reverse">
            <div className="join-text">
                <p>Always Watching</p>
            </div>
              <div className="join-icon">
                <span className="star gradient-text">✦</span>
            </div>
        </div>
          </div>        
    );
}
