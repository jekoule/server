OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "Cancellazione delle associazioni non riuscita.",
    "Failed to delete the server configuration" : "Eliminazione della configurazione del server non riuscita",
    "Invalid configuration: Anonymous binding is not allowed." : "La configurazione non è valida: l'associazione anonima non è consentita.",
    "Valid configuration, connection established!" : "Configurazione valida, connessione stabilita!",
    "Valid configuration, but binding failed. Please check the server settings and credentials." : "Configurazione valida, ma associazione non riuscita. Controlla le impostazioni del server e le credenziali.",
    "Invalid configuration. Please have a look at the logs for further details." : "Configurazione non valida. Controlla i log per ulteriori dettagli.",
    "No action specified" : "Nessuna azione specificata",
    "No configuration specified" : "Nessuna configurazione specificata",
    "No data specified" : "Nessun dato specificato",
    " Could not set configuration %s" : "Impossibile impostare la configurazione %s",
    "Action does not exist" : "L'azione non esiste",
    "LDAP user and group backend" : "Motore utente e gruppo LDAP",
    "Renewing …" : "Rinnovo...",
    "Very weak password" : "Password molto debole",
    "Weak password" : "Password debole",
    "So-so password" : "Password così-così",
    "Good password" : "Password buona",
    "Strong password" : "Password forte",
    "The Base DN appears to be wrong" : "Il DN base sembra essere errato",
    "Testing configuration…" : "Prova della configurazione...",
    "Configuration incorrect" : "Configurazione non corretta",
    "Configuration incomplete" : "Configurazione incompleta",
    "Configuration OK" : "Configurazione corretta",
    "Select groups" : "Seleziona i gruppi",
    "Select object classes" : "Seleziona le classi di oggetti",
    "Please check the credentials, they seem to be wrong." : "Controlla le credenziali, sembrano essere errate.",
    "Please specify the port, it could not be auto-detected." : "Specifica la porta, potrebbe non essere rilevata automaticamente.",
    "Base DN could not be auto-detected, please revise credentials, host and port." : "Il DN base non può essere rilevato automaticamente, controlla le credenziali, l'host e la porta.",
    "Could not detect Base DN, please enter it manually." : "Impossibile rilevare il DN base, digitalo manualmente.",
    "{nthServer}. Server" : "{nthServer}. server",
    "No object found in the given Base DN. Please revise." : "Nessun oggetto trovato nel DN base specificato. Controlla.",
    "More than 1,000 directory entries available." : "Più di 1.000 cartelle disponibili.",
    "_{objectsFound} entry available within the provided Base DN_::_{objectsFound} entries available within the provided Base DN_" : ["{objectsFound} voce disponibile all'interno del DN base fornito","{objectsFound} voci disponibili all'interno del DN base fornito"],
    "An error occurred. Please check the Base DN, as well as connection settings and credentials." : "Si è verificato un errore. Controlla il DN base, così come le impostazioni di connessione e le credenziali.",
    "Do you really want to delete the current Server Configuration?" : "Vuoi davvero eliminare la configurazione attuale del server?",
    "Confirm Deletion" : "Conferma l'eliminazione",
    "Mappings cleared successfully!" : "Associazioni cancellate correttamente!",
    "Error while clearing the mappings." : "Errore durante la cancellazione delle associazioni.",
    "Anonymous bind is not allowed. Please provide a User DN and Password." : "L'associazione anonima non è consentita. Fornisci un DN utente e la password.",
    "LDAP Operations error. Anonymous bind might not be allowed." : "Errore delle operazioni LDAP. L'associazione anonima potrebbe non essere consentita.",
    "Saving failed. Please make sure the database is in Operation. Reload before continuing." : "Salvataggio non riuscito. Assicurati che il database sia operativo. Ricarica prima di continuare.",
    "Switching the mode will enable automatic LDAP queries. Depending on your LDAP size they may take a while. Do you still want to switch the mode?" : "Il cambio di modalità abiliterà le query LDAP automatiche. In base alla dimensione di LDAP, potrebbero richiedere del tempo. Vuoi ancora cambiare modalità?",
    "Mode switch" : "Cambio modalità",
    "Select attributes" : "Seleziona gli attributi",
    "User not found. Please check your login attributes and username. Effective filter (to copy-and-paste for command-line validation): <br/>" : "Utente non trovato. Controlla i tuoi attributi di accesso e il nome utente.\nFiltro effettivo (copiare e incollare per la convalida della riga di comando):<br/>",
    "User found and settings verified." : "Utente trovato e impostazioni verificate.",
    "Consider narrowing your search, as it encompassed many users, only the first one of whom will be able to log in." : "Valuta di restringere la tua ricerca, poiché ha incluso molti utenti, solo il primo dei quali sarà in grado di accedere.",
    "An unspecified error occurred. Please check log and settings." : "Si è verificato un errore non specificato. Controlla le impostazioni e il file di log.",
    "The search filter is invalid, probably due to syntax issues like uneven number of opened and closed brackets. Please revise." : "Il filtro di ricerca non è valido, probabilmente a causa di problemi di sintassi come un numero dispari di parentesi aperte e chiuse. Controlla.",
    "A connection error to LDAP / AD occurred, please check host, port and credentials." : "Si è verificato un errore di connessione a LDAP / AD, controlla l'host, la porta e le credenziali.",
    "The \"%uid\" placeholder is missing. It will be replaced with the login name when querying LDAP / AD." : "Manca il segnaposto \"%uid\". Sarà sostituito con il nome di accesso nelle interrogazioni LDAP / AD.",
    "Please provide a login name to test against" : "Fornisci un nome di accesso da provare",
    "The group box was disabled, because the LDAP / AD server does not support memberOf." : "La casella dei gruppi è stata disabilitata, poiché il server LDAP / AD non supporta memberOf.",
    "Password change rejected. Hint: " : "Cambio password rifiutato. Suggerimento:",
    "Please login with the new password" : "Accedi con la nuova password",
    "Your password will expire tomorrow." : "La tua password scadrà domani.",
    "Your password will expire today." : "La tua password scadrà oggi.",
    "_Your password will expire within %n day._::_Your password will expire within %n days._" : ["La tua password scadrà tra %n giorno.","La tua password scadrà oggi tra %n giorni."],
    "LDAP / AD integration" : "Integrazione LDAP / AD",
    "_%s group found_::_%s groups found_" : ["%s gruppo trovato","%s gruppi trovati"],
    "_%s user found_::_%s users found_" : ["%s utente trovato","%s utenti trovati"],
    "Could not detect user display name attribute. Please specify it yourself in advanced LDAP settings." : "Impossibile rilevare l'attributo nome visualizzato dell'utente. Specificalo nelle impostazioni avanzate di LDAP.",
    "Could not find the desired feature" : "Impossibile trovare la funzionalità desiderata",
    "Invalid Host" : "Host non valido",
    "This application enables administrators to connect Nextcloud to an LDAP-based user directory." : "Questa applicazione consente agli amministratori di collegare Nextcloud a una directory di utenti basata su LDAP.",
    "Test Configuration" : "Prova configurazione",
    "Help" : "Aiuto",
    "Groups meeting these criteria are available in %s:" : "I gruppi che corrispondono a questi criteri sono disponibili in %s:",
    "Only these object classes:" : "Solo queste classi di oggetti:",
    "Only from these groups:" : "Solo da questi gruppi:",
    "Search groups" : "Cerca gruppi",
    "Available groups" : "Gruppi disponibili",
    "Selected groups" : "Gruppi selezionati",
    "Edit LDAP Query" : "Modifica query LDAP",
    "LDAP Filter:" : "Filtro LDAP:",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "Il filtro specifica quali gruppi LDAP devono avere accesso all'istanza %s.",
    "Verify settings and count the groups" : "Verifica le impostazioni e conta i gruppi",
    "When logging in, %s will find the user based on the following attributes:" : "Quando accedi, %s troverà l'utente sulla base dei seguenti attributi:",
    "LDAP / AD Username:" : "Nome utente LDAP / AD:",
    "Allows login against the LDAP / AD username, which is either \"uid\" or \"sAMAccountName\" and will be detected." : "Consente l'accesso tramite il nome utente LDAP / AD, può essere sia \"uid\" o \"sAMAccountName\" e sarà rilevato.",
    "LDAP / AD Email Address:" : "Indirizzo email LDAP / AD:",
    "Allows login against an email attribute. \"mail\" and \"mailPrimaryAddress\" allowed." : "Consente l'accesso tramite l'attributo email. \"mail\" e \"mailPrimaryAddress\" sono consentiti.",
    "Other Attributes:" : "Altri attributi:",
    "Defines the filter to apply, when login is attempted. \"%%uid\" replaces the username in the login action. Example: \"uid=%%uid\"" : "Definisce i filtri da applicare quando viene eseguito il tentativo di accesso. \"%%uid\" rimpiazza il nome utente nell'azione di accesso. Esempio: \"uid=%%uid\"",
    "Test Loginname" : "Prova nome di accesso",
    "Verify settings" : "Verifica impostazioni",
    "1. Server" : "1. server",
    "%s. Server:" : "%s. server:",
    "Add a new configuration" : "Aggiungi una nuova configurazione",
    "Copy current configuration into new directory binding" : "Copia la configurazione attuale nella nuova cartella associata",
    "Delete the current configuration" : "Elimina la configurazione attuale",
    "Host" : "Host",
    "You can omit the protocol, unless you require SSL. If so, start with ldaps://" : "È possibile omettere il protocollo, a meno che non sia necessario SSL. In questo caso, inizia con ldaps://",
    "Port" : "Porta",
    "Detect Port" : "Rileva porta",
    "User DN" : "DN utente",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "Il DN per il client dell'utente con cui deve essere associato, ad esempio uid=agente,dc=esempio,dc=com. Per l'accesso anonimo, lasciare vuoti i campi DN e Password",
    "Password" : "Password",
    "For anonymous access, leave DN and Password empty." : "Per l'accesso anonimo, lascia vuoti i campi DN e Password",
    "Save Credentials" : "Salva credenziali",
    "One Base DN per line" : "Un DN base per riga",
    "You can specify Base DN for users and groups in the Advanced tab" : "Puoi specificare un DN base per gli utenti ed i gruppi nella scheda Avanzate",
    "Detect Base DN" : "Rileva DN base",
    "Test Base DN" : "Rileva DN base",
    "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge." : "Impedisce le richieste LDAP automatiche. Meglio per installazioni più grandi, ma richiede una certa conoscenza di LDAP.",
    "Manually enter LDAP filters (recommended for large directories)" : "Digita manualmente i filtri LDAP (consigliato per directory grandi)",
    "Listing and searching for users is constrained by these criteria:" : "L'elencazione e la ricerca di utenti è vincolata da questi criteri:",
    "The most common object classes for users are organizationalPerson, person, user, and inetOrgPerson. If you are not sure which object class to select, please consult your directory admin." : "Le classi di oggetti più comuni per gli utenti sono organizationalPerson, person, user, e inetOrgPerson. Se non sei sicuro su quale classe di oggetti selezionare, consulta l'amministratore della tua directory.",
    "The filter specifies which LDAP users shall have access to the %s instance." : "Il filtro specifica quali utenti LDAP devono avere accesso all'istanza %s.",
    "Verify settings and count users" : "Verifica le impostazioni e conta gli utenti",
    "Saving" : "Salvataggio",
    "Back" : "Indietro",
    "Continue" : "Continua",
    "Please renew your password." : "Rinnova la tua password.",
    "An internal error occurred." : "Si è verificato un errore interno.",
    "Please try again or contact your administrator." : "Prova ancora o contatta il tuo amministratore.",
    "Current password" : "Password attuale",
    "New password" : "Nuova password",
    "Renew password" : "Rinnova la password",
    "Wrong password." : "Password errata.",
    "Cancel" : "Annulla",
    "Server" : "Server",
    "Users" : "Utenti",
    "Login Attributes" : "Attributi di accesso",
    "Groups" : "Gruppi",
    "Expert" : "Esperto",
    "Advanced" : "Avanzate",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>Avviso:</b> il modulo PHP LDAP non è installato, il motore non funzionerà. Chiedi al tuo amministratore di sistema di installarlo.",
    "Connection Settings" : "Impostazioni di connessione",
    "Configuration Active" : "Configurazione attiva",
    "When unchecked, this configuration will be skipped." : "Se deselezionata, questa configurazione sarà saltata.",
    "Backup (Replica) Host" : "Host di backup (Replica)",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "Fornisci un host di backup opzionale. Deve essere una replica del server AD/LDAP principale.",
    "Backup (Replica) Port" : "Porta di backup (Replica)",
    "Disable Main Server" : "Disabilita server principale",
    "Only connect to the replica server." : "Collegati solo al server di replica.",
    "Turn off SSL certificate validation." : "Disattiva il controllo del certificato SSL.",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "Non consigliata, da utilizzare solo per test! Se la connessione funziona solo con questa opzione, importa il certificate SSL del server LDAP sul tuo server %s.",
    "Cache Time-To-Live" : "Tempo di vita della cache",
    "in seconds. A change empties the cache." : "in secondi. Il cambio svuota la cache.",
    "Directory Settings" : "Impostazioni delle cartelle",
    "User Display Name Field" : "Campo per la visualizzazione del nome utente",
    "The LDAP attribute to use to generate the user's display name." : "L'attributo LDAP da usare per generare il nome visualizzato dell'utente.",
    "2nd User Display Name Field" : "Campo per il secondo nome visualizzato dell'utente",
    "Optional. An LDAP attribute to be added to the display name in brackets. Results in e.g. »John Doe (john.doe@example.org)«." : "Facoltativo. Un attributo LDAP da aggiungere al nome visualizzato tra parentesi. Ad es. »Mario Rossi (mario.rossi@esempio.org)«.",
    "Base User Tree" : "Struttura base dell'utente",
    "One User Base DN per line" : "Un DN base utente per riga",
    "User Search Attributes" : "Attributi di ricerca utente",
    "Optional; one attribute per line" : "Opzionale; un attributo per riga",
    "Group Display Name Field" : "Campo per la visualizzazione del nome del gruppo",
    "The LDAP attribute to use to generate the groups's display name." : "L'attributo LDAP da usare per generare il nome visualizzato del gruppo.",
    "Base Group Tree" : "Struttura base del gruppo",
    "One Group Base DN per line" : "Un DN base gruppo per riga",
    "Group Search Attributes" : "Attributi di ricerca gruppo",
    "Group-Member association" : "Associazione gruppo-utente ",
    "Dynamic Group Member URL" : "URL membro di gruppo dinamico",
    "The LDAP attribute that on group objects contains an LDAP search URL that determines what objects belong to the group. (An empty setting disables dynamic group membership functionality.)" : "L'attributo LDAP che sugli oggetti di gruppo contiene un URL di ricerca LDAP che determina quali oggetti appartengono al gruppo. (Un valore vuoto disabilità la funzionalità di appartenenza ai gruppi dinamica)",
    "Nested Groups" : "Gruppi nidificati",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "Quando è attivato, i gruppi che contengono altri gruppi sono supportati. (Funziona solo se l'attributo del gruppo membro contiene DN.)",
    "Paging chunksize" : "Dimensione del blocco di paginazione",
    "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)" : "Dimensione del blocco per le ricerche LDAP paginate che potrebbero restituire risultati pesanti come l'enumerazione di utenti o gruppi.(L'impostazione a 0 disabilita le ricerche LDAP paginate in questi casi.)",
    "Enable LDAP password changes per user" : "Abilita le modifiche per utente della password LDAP",
    "Allow LDAP users to change their password and allow Super Administrators and Group Administrators to change the password of their LDAP users. Only works when access control policies are configured accordingly on the LDAP server. As passwords are sent in plaintext to the LDAP server, transport encryption must be used and password hashing should be configured on the LDAP server." : "Consente agli utenti LDAP di cambiare la propria password e consente al super amministratore e agli amministratori dei gruppi di cambiare la password dei rispettivi utenti LDAP. Funziona solo se i criteri di controllo di accesso sono configurati in accordo sul server LDAP. Poiché le password sono inviate in chiaro al server LDAP, è necessario utilizzare la cifratura del trasporto e configurare la creazione di un hash della password sul server LDAP.",
    "(New password is sent as plain text to LDAP)" : "(La nuova password è inviata in chiaro a LDAP)",
    "Default password policy DN" : "DN criterio predefinito delle password",
    "The DN of a default password policy that will be used for password expiry handling. Works only when LDAP password changes per user are enabled and is only supported by OpenLDAP. Leave empty to disable password expiry handling." : "Il DN di un criterio predefinito delle password che sarà utilizzato per la gestione della scadenza delle password. Funziona solo quando la password LDAP è modificabile dall'utente ed è supportata solo da OpenLDAP. Lascia vuoto per disabilitare la gestione della scadenza delle password.",
    "Special Attributes" : "Attributi speciali",
    "Quota Field" : "Campo Quota",
    "Leave empty for user's default quota. Otherwise, specify an LDAP/AD attribute." : "Lascia vuoto per la quota utente predefinita. Altrimenti, specifica un attributo LDAP/AD.",
    "Quota Default" : "Quota predefinita",
    "Override default quota for LDAP users who do not have a quota set in the Quota Field." : "Applica la quota predefinita per gli utenti LDAP che non hanno un valore impostato nel campo Quota.",
    "Email Field" : "Campo Email",
    "Set the user's email from their LDAP attribute. Leave it empty for default behaviour." : "Imposta l'indirizzo di posta degli utenti dal loro attributo LDAP. Lascialo vuoto per il comportamento predefinito.",
    "User Home Folder Naming Rule" : "Regola di assegnazione del nome della cartella utente",
    "Leave empty for user name (default). Otherwise, specify an LDAP/AD attribute." : "Lascia vuoto per il nome utente (predefinito). Altrimenti, specifica un attributo LDAP/AD.",
    "Internal Username" : "Nome utente interno",
    "By default the internal username will be created from the UUID attribute. It makes sure that the username is unique and characters do not need to be converted. The internal username has the restriction that only these characters are allowed: [ a-zA-Z0-9_.@- ].  Other characters are replaced with their ASCII correspondence or simply omitted. On collisions a number will be added/increased. The internal username is used to identify a user internally. It is also the default name for the user home folder. It is also a part of remote URLs, for instance for all *DAV services. With this setting, the default behavior can be overridden. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users." : "In modo predefinito, il nome utente interno sarà creato dall'attributo UUID. Ciò assicura che il nome utente sia univoco e che non sia necessario convertire i caratteri. Il nome utente interno consente l'uso di determinati caratteri:  [ a-zA-Z0-9_.@- ]. Altri caratteri sono sostituiti con il corrispondente ASCII o sono semplicemente omessi. In caso di conflitto, sarà aggiunto/incrementato un numero. Il nome utente interno è utilizzato per identificare un utente internamente. Rappresenta, inoltre, il nome predefinito per la cartella home dell'utente in ownCloud. Costituisce anche una parte di URL remoti, ad esempio per tutti i servizi *DAV. Con questa impostazione, il comportamento predefinito può essere scavalcato. Lascialo vuoto per ottenere il comportamento predefinito. Le modifiche avranno effetto solo sui nuovo utenti LDAP associati (aggiunti).",
    "Internal Username Attribute:" : "Attributo nome utente interno:",
    "Override UUID detection" : "Ignora rilevamento UUID",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "In modo predefinito, l'attributo UUID viene rilevato automaticamente. L'attributo UUID è utilizzato per identificare senza alcun dubbio gli utenti e i gruppi LDAP. Inoltre, il nome utente interno sarà creato sulla base dell'UUID, se non è specificato in precedenza. Puoi ignorare l'impostazione e fornire un attributo di tua scelta. Assicurati che l'attributo scelto possa essere ottenuto sia per gli utenti che per i gruppi e che sia univoco. Lascialo vuoto per ottenere il comportamento predefinito. Le modifiche avranno effetto solo sui nuovi utenti e gruppi LDAP associati (aggiunti).",
    "UUID Attribute for Users:" : "Attributo UUID per gli utenti:",
    "UUID Attribute for Groups:" : "Attributo UUID per i gruppi:",
    "Username-LDAP User Mapping" : "Associazione Nome utente-Utente LDAP",
    "Usernames are used to store and assign metadata. In order to precisely identify and recognize users, each LDAP user will have an internal username. This requires a mapping from username to LDAP user. The created username is mapped to the UUID of the LDAP user. Additionally the DN is cached as well to reduce LDAP interaction, but it is not used for identification. If the DN changes, the changes will be found. The internal username is used all over. Clearing the mappings will have leftovers everywhere. Clearing the mappings is not configuration sensitive, it affects all LDAP configurations! Never clear the mappings in a production environment, only in a testing or experimental stage." : "I nomi utente sono utilizzati per archiviare e assegnare i metadati. Per identificare con precisione e riconoscere gli utenti, ogni utente LDAP avrà un nome utente interno. Il nome utente creato. Ciò richiede un'associazione tra il nome utente e l'utente LDAP. Il nome utente creato è associato allo UUID dell'utente LDAP. In aggiunta, il DN viene memorizzato in cache per ridurre l'interazione con LDAP, ma non è utilizzato per l'identificazione. Se il DN cambia, le modifiche saranno rilevate. Il nome utente interno è utilizzato dappertutto. La cancellazione delle associazioni lascerà tracce residue ovunque e interesserà tutta la configurazione LDAP. Non cancellare mai le associazioni in un ambiente di produzione, ma solo in una fase sperimentale o di test.",
    "Clear Username-LDAP User Mapping" : "Cancella associazione Nome utente-Utente LDAP",
    "Clear Groupname-LDAP Group Mapping" : "Cancella associazione Nome gruppo-Gruppo LDAP",
    " entries available within the provided Base DN" : "voci disponibili all'interno del DN base",
    "Wrong password. Reset it?" : "Password errata. Vuoi reimpostarla?",
    "LDAP" : "LDAP",
    "<b>Warning:</b> Apps user_ldap and user_webdavauth are incompatible. You may experience unexpected behavior. Please ask your system administrator to disable one of them." : "<b>Avviso:</b> le applicazioni user_ldap e user_webdavauth sono incompatibili. Potresti riscontrare un comportamento inatteso. Chiedi al tuo amministratore di sistema di disabilitarne una.",
    "Usernames are used to store and assign (meta) data. In order to precisely identify and recognize users, each LDAP user will have an internal username. This requires a mapping from username to LDAP user. The created username is mapped to the UUID of the LDAP user. Additionally the DN is cached as well to reduce LDAP interaction, but it is not used for identification. If the DN changes, the changes will be found. The internal username is used all over. Clearing the mappings will have leftovers everywhere. Clearing the mappings is not configuration sensitive, it affects all LDAP configurations! Never clear the mappings in a production environment, only in a testing or experimental stage." : "I nomi utente sono utilizzati per archiviare e assegnare i (meta) dati. Per identificare con precisione e riconoscere gli utenti, ogni utente LDAP avrà un nome utente interno. Ciò richiede un'associazione tra il nome utente e l'utente LDAP. In aggiunta, il DN viene mantenuto in cache per ridurre l'interazione con LDAP, ma non è utilizzato per l'identificazione. Se il DN cambia, le modifiche saranno rilevate. Il nome utente interno è utilizzato dappertutto. La cancellazione delle associazioni lascerà tracce residue ovunque e interesserà tutta la configurazione LDAP. Non cancellare mai le associazioni in un ambiente di produzione, ma solo in una fase sperimentale o di test."
},
"nplurals=2; plural=(n != 1);");
