export interface Profile {
  imageUrl?: string | void
  firstName?: string
  lastName?: string
  email?: string
  imageUrlFromStorage?: any;
  username?: string
}

export interface ProfileState {
  profile?: Profile
  userData?: any
  hasChanges: boolean
  initialProfile: Profile
  loading: boolean
}

export interface ProfileAction {
  setLoading: (loading: boolean) => void
  setHasChanges: (hasChanges: boolean) => void
  saveProfile: () => Promise<void>
  setInitialProfile: (fetchedProfile: Profile) => void
  setProfile?: (field: string, value: string) => void
  setImageFile?: (image: File) => void
  setImageURL?: (image: string) => void
  getProfileData: () => Promise<(() => void) | undefined>
}
