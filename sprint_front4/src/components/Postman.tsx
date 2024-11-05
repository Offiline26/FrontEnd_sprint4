import { useEffect } from 'react';

export default function PostmanButton() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://run.pstmn.io/button.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div className="postman-run-button"
            data-postman-action="collection/fork"
            data-postman-visibility="public"
            data-postman-var-1="39461010-7f0d1d1e-d266-42b0-855c-0360c4772f98"
            data-postman-collection-url="entityId=39461010-7f0d1d1e-d266-42b0-855c-0360c4772f98&entityType=collection&workspaceId=07444236-6f93-4198-b855-a8e98b2f15c9">
        </div>
    );
}