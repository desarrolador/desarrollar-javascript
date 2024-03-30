        // Datos simulados de comentarios
        var comments = [
            { name: 'Usuario1', comment: 'Este es un comentario de ejemplo 1.' },
            { name: 'Usuario2', comment: 'Este es un comentario de ejemplo 2.' },
            { name: 'Usuario3', comment: 'Este es un comentario de ejemplo 3.' }
        ];

        // Función para agregar comentarios al contenedor
        function renderComments(comments) {
            var commentsContainer = document.getElementById('commentsContainer');
            commentsContainer.innerHTML = '';

            comments.forEach(function(comment) {
                var commentDiv = document.createElement('div');
                commentDiv.className = 'comment';
                commentDiv.innerHTML = '<h3>' + comment.name + '</h3><p>' + comment.comment + '</p>';
                commentsContainer.appendChild(commentDiv);
            });
        }

        // Función para agregar un nuevo comentario
        function addComment() {
            var name = document.getElementById('nameInput').value;
            var comment = document.getElementById('commentInput').value;

            if (name && comment) {
                comments.push({ name: name, comment: comment });
                renderComments(comments);
                document.getElementById('nameInput').value = '';
                document.getElementById('commentInput').value = '';
            } else {
                alert('Por favor, complete todos los campos.');
            }
        }

        // Función para buscar comentarios
        function searchComments() {
            var searchInput = document.getElementById('searchInput').value.toLowerCase();
            var filteredComments = comments.filter(function(comment) {
                return comment.name.toLowerCase().includes(searchInput) || comment.comment.toLowerCase().includes(searchInput);
            });
            renderComments(filteredComments);
        }

        // Renderizar comentarios iniciales
        renderComments(comments);

