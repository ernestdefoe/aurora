import app from 'flarum/admin/app';

app.initializers.add('ernestdefoe/flarum-aurora-theme', () => {
    app.extensionData
        .for('ernestdefoe-flarum-aurora-theme')
        .registerSetting({
            setting: 'aurora-theme.primary_gradient_start',
            label: app.translator.trans('ernestdefoe-flarum-aurora-theme.admin.settings.gradient_start'),
            type: 'color',
        })
        .registerSetting({
            setting: 'aurora-theme.primary_gradient_end',
            label: app.translator.trans('ernestdefoe-flarum-aurora-theme.admin.settings.gradient_end'),
            type: 'color',
        })
        .registerSetting({
            setting: 'aurora-theme.accent_color',
            label: app.translator.trans('ernestdefoe-flarum-aurora-theme.admin.settings.accent_color'),
            type: 'color',
        })
        .registerSetting({
            setting: 'aurora-theme.enable_glassmorphism',
            label: app.translator.trans('ernestdefoe-flarum-aurora-theme.admin.settings.glassmorphism'),
            type: 'boolean',
        })
        .registerSetting({
            setting: 'aurora-theme.enable_glow',
            label: app.translator.trans('ernestdefoe-flarum-aurora-theme.admin.settings.glow'),
            type: 'boolean',
        })
        .registerSetting({
            setting: 'aurora-theme.animate_background',
            label: app.translator.trans('ernestdefoe-flarum-aurora-theme.admin.settings.animate_background'),
            type: 'boolean',
        });
});
