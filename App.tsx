// App.tsx
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { generateTokenSystem } from './src/token-model/generator';

const INITIAL_PROJECTS = [
  { id: '1', name: 'Arlo', brandHex: '#3b82f6', archetypeId: 'material-inspired', edited: '2h ago', status: 'Stable', tag: 'RECENT', warnings: 2, errors: 0 },
  { id: '2', name: 'Midnight', brandHex: '#6366f1', archetypeId: 'apple-inspired', edited: 'yesterday', status: 'Review', tag: null, warnings: 1, errors: 3 },
  { id: '3', name: 'Studio', brandHex: '#0ea5e9', archetypeId: 'minimal', edited: '3d ago', status: 'Stable', tag: null, warnings: 0, errors: 0 },
  { id: '4', name: 'Editorial', brandHex: '#f43f5e', archetypeId: 'editorial', edited: '1w ago', status: 'Draft', tag: null, warnings: 5, errors: 1 },
  { id: '5', name: 'Commerce', brandHex: '#10b981', archetypeId: 'material-inspired', edited: '2w ago', status: 'Stable', tag: null, warnings: 1, errors: 0 },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [projects] = useState(INITIAL_PROJECTS);
  const [selectedProject, setSelectedProject] = useState(INITIAL_PROJECTS[0]);

  const activeSystem = generateTokenSystem({
    archetypeId: selectedProject.archetypeId,
    brandHex: selectedProject.brandHex,
  });

  const activeTokens = activeSystem.tokens;
  const primaryHex = (activeTokens['color.primary.600'] as any)?.value || selectedProject.brandHex;
  const secondaryHex = (activeTokens['color.primary.400'] as any)?.value || '#60a5fa';

  return (
    // Cinematic Dark Room Base with Spatial Ambient Lighting
    <LinearGradient
      colors={[primaryHex, '#05070c', '#020305']}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      <View style={styles.cinematicOverlay}>
        {/* Header / Spatial Studio Bar */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={[styles.logoSymbol, { borderColor: primaryHex }]}>
              <Text style={styles.logoSymbolText}>TF</Text>
            </View>
            <Text style={styles.logoText}>TokenForge</Text>
          </View>

          <TouchableOpacity style={styles.profileAvatar} onPress={() => alert('Profile & Settings')}>
            <Text style={styles.avatarText}>TF</Text>
          </TouchableOpacity>
        </View>

        {/* Main Content Area */}
        <View style={styles.contentArea}>
          {activeTab === 'home' && (
            <ScrollView contentContainerStyle={styles.scrollContent}>
              {/* Tactical "Create System" Studio Action */}
              <TouchableOpacity 
                style={[styles.newProjectButton, { borderColor: primaryHex + '55' }]} 
                activeOpacity={0.85}
                onPress={() => alert('Open Create New System Modal')}
              >
                <Text style={[styles.newProjectButtonText, { color: primaryHex }]}>+ Initialize New System</Text>
              </TouchableOpacity>

              {/* Spatial Glass Card Grid with Chromatic Edge-Lighting */}
              <View style={styles.grid}>
                {projects.map((project) => {
                  const sys = generateTokenSystem({
                    archetypeId: project.archetypeId,
                    brandHex: project.brandHex,
                  });

                  const tokens = sys.tokens;
                  const tokenCount = Object.keys(tokens).length;

                  const pColor = (tokens['color.primary.600'] as any)?.value || project.brandHex;
                  const sColor = (tokens['color.primary.400'] as any)?.value || '#60a5fa';

                  const swatchData = [
                    { label: 'P', hex: (tokens['color.primary.600'] as any)?.value || pColor },
                    { label: 'S', hex: (tokens['color.primary.400'] as any)?.value || sColor },
                    { label: 'T', hex: (tokens['color.primary.300'] as any)?.value || '#93c5fd' },
                    { label: 'N', hex: (tokens['color.neutral.500'] as any)?.value || '#64748b' },
                  ];

                  const isSelected = selectedProject.id === project.id;

                  return (
                    <TouchableOpacity 
                      key={project.id} 
                      activeOpacity={0.88}
                      onPress={() => setSelectedProject(project)}
                      style={[
                        styles.cardWrapper, 
                        // Chromatic Edge-Lighting: Active border takes the project's primary live hue
                        { borderColor: isSelected ? pColor : 'rgba(255, 255, 255, 0.08)' },
                        isSelected && styles.selectedCardWrapper
                      ]}
                    >
                      {/* Frosted Spatial Glass Panel Layer */}
                      <View style={styles.cardGlassPanel}>
                        {project.tag && (
                          <View style={styles.tagBadge}>
                            <Text style={styles.tagText}>{project.tag}</Text>
                          </View>
                        )}

                        <View>
                          <Text style={styles.cardTitle}>{project.name}</Text>
                          <Text style={styles.cardMeta}>{tokenCount} tokens  •  {project.edited}</Text>
                        </View>

                        {/* Precision Swatch Chips */}
                        <View style={styles.swatchPreviewRow}>
                          {swatchData.map((swatch, idx) => (
                            <View key={idx} style={[styles.miniSwatch, { backgroundColor: swatch.hex }]}>
                              <Text style={styles.swatchLabel}>{swatch.label}</Text>
                            </View>
                          ))}
                        </View>

                        <View style={styles.cardFooter}>
                          <View style={styles.statusRow}>
                            <View style={[styles.statusDot, project.status === 'Stable' ? styles.dotGreen : project.status === 'Review' ? styles.dotOrange : styles.dotGrey]} />
                            <Text style={styles.statusText}>{project.status}</Text>
                          </View>

                          <View style={styles.badgeRow}>
                            {project.warnings > 0 && (
                              <View style={styles.warningPill}>
                                <Text style={styles.warningText}>⚠️ {project.warnings}</Text>
                              </View>
                            )}
                            {project.errors > 0 && (
                              <View style={styles.errorPill}>
                                <Text style={styles.errorText}>❌ {project.errors}</Text>
                              </View>
                            )}
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
          )}

          {activeTab === 'tokens' && (
            <ScrollView contentContainerStyle={styles.scrollContent}>
              <View style={styles.labCard}>
                <Text style={styles.labTitle}>Active System: {selectedProject.name}</Text>
                <Text style={styles.labSubtitle}>Archetype: {selectedProject.archetypeId}</Text>
                <Text style={styles.labMeta}>Total Canonical Tokens: {Object.keys(activeTokens).length}</Text>
                <View style={styles.tokenList}>
                  <Text style={styles.tokenItem}>• color.primary.600: {primaryHex}</Text>
                  <Text style={styles.tokenItem}>• color.primary.400: {secondaryHex}</Text>
                  <Text style={styles.tokenItem}>• archetype: {selectedProject.archetypeId}</Text>
                </View>
              </View>
            </ScrollView>
          )}

          {activeTab === 'components' && (
            <View style={styles.placeholderContainer}>
              <Text style={styles.placeholderTitle}>UI COMPONENT LAB</Text>
              <Text style={styles.placeholderSubtitle}>Testing components with {selectedProject.name} tokens...</Text>
            </View>
          )}

          {activeTab === 'validation' && (
            <View style={styles.placeholderContainer}>
              <Text style={styles.placeholderTitle}>WCAG AUDIT SUITE</Text>
              <Text style={styles.placeholderSubtitle}>System status: {selectedProject.status} ({selectedProject.warnings} warnings)</Text>
            </View>
          )}

          {activeTab === 'export' && (
            <View style={styles.placeholderContainer}>
              <Text style={styles.placeholderTitle}>CODE EXPORT STUDIO</Text>
              <Text style={styles.placeholderSubtitle}>JSON & Tailwind outputs ready for {selectedProject.name}.</Text>
            </View>
          )}
        </View>

        {/* Floating Spatial Glass Bottom Navigation Dock */}
        <View style={styles.dockContainer}>
          <View style={styles.floatingDock}>
            {[
              { id: 'home', label: 'Home' },
              { id: 'tokens', label: 'Tokens' },
              { id: 'components', label: 'UI Lab' },
              { id: 'validation', label: 'Audit' },
              { id: 'export', label: 'Export' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <TouchableOpacity
                  key={tab.id}
                  style={[
                    styles.dockItem, 
                    isActive && [styles.activeDockItem, { backgroundColor: primaryHex + '35', borderColor: primaryHex }]
                  ]}
                  onPress={() => setActiveTab(tab.id)}
                  activeOpacity={0.8}
                >
                  <Text style={[styles.dockLabel, isActive && styles.activeDockLabel]}>
                    {tab.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  cinematicOverlay: { flex: 1, backgroundColor: 'rgba(5, 7, 12, 0.92)' },
  
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.04)',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoSymbol: {
    width: 26,
    height: 26,
    borderRadius: 6,
    backgroundColor: '#0a0e17',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  logoSymbolText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  logoText: {
    color: '#f8fafc',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: -0.3,
  },
  profileAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#121824',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  avatarText: {
    color: '#93c5fd',
    fontSize: 11,
    fontWeight: 'bold',
  },

  contentArea: {
    flex: 1,
    paddingBottom: 90,
  },
  scrollContent: {
    padding: 20,
  },

  newProjectButton: {
    backgroundColor: 'rgba(15, 22, 36, 0.65)',
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  newProjectButtonText: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.3,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 14,
    justifyContent: 'space-between',
  },
  cardWrapper: {
    width: '48%',
    height: 175,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1.5,
    marginBottom: 14,
    backgroundColor: 'rgba(11, 16, 25, 0.55)',
  },
  selectedCardWrapper: {
    borderWidth: 2,
    shadowColor: '#38bdf8',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 8,
  },
  cardGlassPanel: {
    flex: 1,
    backgroundColor: 'rgba(10, 14, 22, 0.6)',
    padding: 14,
    justifyContent: 'space-between',
    position: 'relative',
  },
  tagBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  tagText: {
    color: '#cbd5e1',
    fontSize: 8,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  cardTitle: {
    color: '#f8fafc',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: -0.3,
    marginBottom: 2,
  },
  cardMeta: {
    color: '#64748b',
    fontSize: 10,
  },
  swatchPreviewRow: {
    flexDirection: 'row',
    gap: 6,
    marginVertical: 4,
  },
  miniSwatch: {
    flex: 1,
    height: 28,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  swatchLabel: {
    color: '#ffffff',
    fontSize: 9,
    fontWeight: '800',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.04)',
    paddingTop: 8,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  dotGreen: { backgroundColor: '#10b981' },
  dotOrange: { backgroundColor: '#f59e0b' },
  dotGrey: { backgroundColor: '#64748b' },
  statusText: {
    color: '#94a3b8',
    fontSize: 10,
  },
  badgeRow: {
    flexDirection: 'row',
    gap: 6,
  },
  warningPill: {
    backgroundColor: 'rgba(245, 158, 11, 0.1)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  warningText: {
    fontSize: 9,
    color: '#fbbf24',
    fontWeight: '600',
  },
  errorPill: {
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  errorText: {
    fontSize: 9,
    color: '#f87171',
    fontWeight: '600',
  },

  // Floating Spatial Glass Bottom Navigation Dock
  dockContainer: {
    position: 'absolute',
    bottom: 24,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  floatingDock: {
    flexDirection: 'row',
    backgroundColor: 'rgba(8, 11, 18, 0.75)',
    borderRadius: 32,
    padding: 6,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.6,
    shadowRadius: 12,
    elevation: 12,
    width: '100%',
    justifyContent: 'space-between',
  },
  dockItem: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  activeDockItem: {},
  dockLabel: {
    color: '#64748b',
    fontSize: 11,
    fontWeight: '600',
  },
  activeDockLabel: {
    color: '#ffffff',
    fontWeight: '700',
  },

  // Lab screens / Placeholders
  labCard: {
    backgroundColor: 'rgba(15, 22, 36, 0.65)',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  labTitle: {
    color: '#f8fafc',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  labSubtitle: {
    color: '#94a3b8',
    fontSize: 13,
    marginBottom: 12,
  },
  labMeta: {
    color: '#64748b',
    fontSize: 12,
    marginBottom: 16,
  },
  tokenList: {
    gap: 6,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.06)',
    paddingTop: 12,
  },
  tokenItem: {
    color: '#cbd5e1',
    fontSize: 12,
    fontFamily: 'monospace',
  },

  placeholderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  placeholderTitle: {
    color: '#f8fafc',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 8,
  },
  placeholderSubtitle: {
    color: '#64748b',
    fontSize: 12,
    textAlign: 'center',
  },
});
