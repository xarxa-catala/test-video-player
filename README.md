# test-video-player
Proves del reproductor de vídeo i el llistat d'episodis

Per a utilitzar la llibrería que hem desenvolupat, js/video_player.js, s'han de mantindre les classes al DOM que hem fet servir.

Per al reproductor: video_player

Per al llistat de capítols: video_player_chapters

Per a cada enllaç del llistat: video_player_chapter

Al capítol seleccionat en el moment se li afageix la classe al llistat: current

Ha d'haver-hi un títol secundàri per al capítol seleccionat actualment amb la classe: video_player_current_chapter_title


Si es colen canviar aquestes classes per defecte, per a que coincideixi amb alguna plantilla previa, al fitxer js/video_player.js hi han tres constants que determinen els IDs i Classes utilitzades.
