document.addEventListener('DOMContentLoaded', async function() {
    const updatesList = document.getElementById('updates-list');

    try {
        // Replace 'YOUR_PASTEBIN_URL' with the actual URL of your Pastebin content
        const response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent('https://pastebin.com/raw/UE34pGFy')}`);
        if (!response.ok) {
            throw new Error(`HTTP error status: ${response.status}`);
        }
        const updates = await response.json();
		console.log(updates);
        updates.forEach(update => {
            const updateCard = document.createElement('div');
            updateCard.className = 'update-card';

            const listItem = document.createElement('div');
            listItem.className = 'update-item';

            const updateTitle = document.createElement('h3');
            updateTitle.textContent = update.title;
            listItem.appendChild(updateTitle);

            const updateDescription = document.createElement('p');
            updateDescription.textContent = update.description;
            listItem.appendChild(updateDescription);

            const updateDate = document.createElement('small');
            updateDate.textContent = `Posted on ${new Date(update.date).toLocaleDateString()} `;
            listItem.appendChild(updateDate);

            updateCard.appendChild(listItem);

            updatesList.appendChild(updateCard);
        });
    } catch (error) {
        console.error("Failed to load updates:", error);
    }
});
