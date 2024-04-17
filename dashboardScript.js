function changeContent(section) {
    const mainContent = document.getElementById('main-content');
    switch (section) {
        case 'runs':
            mainContent.innerHTML = `
                <h2>    Runs</h2>
                <table>
                    <tr><th>Run #</th><th>Site</th><th>User</th><th>Time</th><th>Problem</th><th>Language</th><th>Status</th><th>Judge (Site)</th></tr>
                    <!-- Datos de runs aquí -->
                </table>`;
            break;
        case 'createProblem':
            mainContent.innerHTML = `
                <h2>    Create Problem</h2>
                <form id="problem-form">
                    <input type="text" placeholder="Number">
                    <input type="text" placeholder="Short Name">
                    <input type="text" placeholder="Problem Package">
                    <input type="text" placeholder="Color Name">
                    <input type="color" placeholder="Color">
                    <button type="button" onclick="submitForm('problem-form')">Send</button>
                    <button type="button" onclick="document.getElementById('problem-form').reset();">Clear</button>
                </form>`;
            break;
            case 'users':
                mainContent.innerHTML = `
                    <h2>Users</h2>
                    <table>
                        <tr><th>User#</th><th>Site</th><th>Username</th><th>ICPC ID</th><th>Type</th><th>IP</th><th>Last Login</th><th>Last Logout</th><th>Enabled</th><th>Multi</th><th>FullName</th><th>Description</th></tr>
                        <!-- Datos de usuarios aquí -->
                    </table>
                    <button onclick="showNewUserForm()">New User</button>
                    <div id="newUserForm" style="display:none;">
                        <form>
                            <label for="userSiteNumber">User Site Number:</label>
                            <input type="text" id="userSiteNumber" name="userSiteNumber"><br>
                            <label for="userNumber">User Number:</label>
                            <input type="text" id="userNumber" name="userNumber"><br>
                            <label for="username">Username:</label>
                            <input type="text" id="username" name="username"><br>
                            <label for="icpcId">ICPC ID:</label>
                            <input type="text" id="icpcId" name="icpcId"><br>
                            <label for="type">Type:</label>
                            <select id="type" name="type">
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                            </select><br>
                            <label for="enabled">Enabled:</label>
                            <input type="checkbox" id="enabled" name="enabled"><br>
                            <label for="fullName">User Full Name:</label>
                            <input type="text" id="fullName" name="fullName"><br>
                            <label for="description">User Description:</label>
                            <input type="text" id="description" name="description"><br>
                            <label for="userIp">User IP:</label>
                            <input type="text" id="userIp" name="userIp"><br>
                            <label for="password">Password:</label>
                            <input type="password" id="password" name="password"><br>
                            <label for="retypePassword">Retype password:</label>
                            <input type="password" id="retypePassword" name="retypePassword"><br>
                            <button type="submit">Send</button>
                            <button type="button" onclick="hideNewUserForm()">Cancel</button>
                        </form>
                    </div>`;
                break;            
        case 'history':
            mainContent.innerHTML = `
                <h2>    Logs</h2>
                <table>
                    <tr><th>Site</th><th>User</th><th>Type</th><th>Date</th><th>Description</th><th>Status</th></tr>
                    <!-- Entradas de logs aquí -->
                </table>`;
            break;
        // Añadir más casos según sea necesario
    }
}

function newUserForm() {
    // Aquí puedes añadir la función para crear un nuevo usuario
}
function showNewUserForm() {
    document.getElementById('newUserForm').style.display = 'block';
}

function hideNewUserForm() {
    document.getElementById('newUserForm').style.display = 'none';
}
document.getElementById('toggleMenuButton').addEventListener('click', function() {
    var aside = document.querySelector('aside');
    aside.classList.toggle('hidden');
});
function logout() {
    // Aquí puedes agregar cualquier funcionalidad de limpieza necesaria
    // Por ejemplo, limpiar localStorage, cookies, etc.
    // localStorage.clear(); // Ejemplo, si estás usando localStorage

    // Redirigir al usuario a la página de login
    window.location.href = 'login.html';
}


